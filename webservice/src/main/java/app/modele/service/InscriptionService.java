package app.modele.service;

import app.exception.apiException.*;
import app.modele.dao.ICreneauDAO;
import app.modele.dao.IInscriptionDAO;
import app.modele.dao.IPersonneDAO;
import app.modele.entity.Personne;
import app.modele.relation.Inscription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Service
public class InscriptionService implements IInscriptionService {

    @Autowired
    private IPersonneDAO personneDAO;
    @Autowired
    private ICreneauDAO creneauDAO;
    @Autowired
    private IInscriptionDAO inscriptionDAO;

    @Autowired
    private IPersonneService personneService;

    private void checkForeignKey(Inscription inscription) {
        if (!personneDAO.exist(inscription.getPersonne().getId())) {
            throw new ForeignKeyViolationApiException("personne");
        }
        if (!creneauDAO.exist(inscription.getCreneau().getId())) {
            throw new ForeignKeyViolationApiException("creneau");
        }
    }

    @Override
    public void delete(Inscription relation) {
        final Inscription oldInscription = inscriptionDAO.getInscription(relation);
        if (oldInscription == null) {
            final String msg = String.format("L'inscription (idPersonne,idCreneau) (%d,%d) n'existe pas.", relation.getPersonne().getId(), relation.getCreneau().getId());
            throw new NotFoundApiException(msg);
        }

        final boolean delete = inscriptionDAO.delete(relation);
        if (!delete) {
            final String msg = "On ne peux pas supprimer une inscription qui est validé.";
            throw new DeleteInscriptionValideApiException(msg);
        }
    }

    @Override
    public Long demandeInscriptions(DemandeInscription demandeInscription) {

        if (!demandeInscription.allCreneauDifferent()) {
            throw new CreneauNonUniqueApiException();
        }

        final Inscription[] inscriptions = demandeInscription.getInscriptions();
        for (int i = 0; i < inscriptions.length; i++) {
            Inscription inscription = inscriptions[i];

            final Long id = inscription.getCreneau().getId();
            if (!creneauDAO.exist(id)) {
                final String s = String.format("inscriptions[%d].creneau", i);
                throw new ForeignKeyViolationApiException(s);
            }

        }

        final Long idPersonne = personneService.insert(demandeInscription.getPersonne());
        demandeInscription.getPersonne().setId(idPersonne);
        for (Inscription inscription : inscriptions) {
            inscription.setPersonne(demandeInscription.getPersonne());
            insert(inscription);
        }

        // Mail confimation
        return idPersonne;
    }

    @Override
    public void insert(Inscription relation) {
        checkForeignKey(relation);
        if (inscriptionDAO.exist(relation)) {
            final String msg = String.format("La relation (idPersonne,idCreneau) (%d,%d) existe déjà.", relation.getPersonne().getId(), relation.getCreneau().getId());
            throw new ExistApiException(msg);
        }

        relation.setEnAttente(true);
        relation.setEcts(0);
        relation.setNombreHeures(0);

        inscriptionDAO.insert(relation);
    }

    @Override
    public void update(Inscription inscription) {
        final Inscription oldInscription = inscriptionDAO.getInscription(inscription);
        if (oldInscription == null) {
            final String msg = String.format("L'inscription (idPersonne,idCreneau) (%d,%d) n'existe pas.", inscription.getPersonne().getId(), inscription.getCreneau().getId());
            throw new NotFoundApiException(msg);
        }

        final boolean update = inscriptionDAO.update(inscription);

        if (!update) {
            final String msg = String.format("Le creneau %d a atteint son effectif maximal.", inscription.getCreneau().getId());
            throw new EffectifCreneauAtteintApiException(msg);
        }
        if (oldInscription.getEnAttente() && !inscription.getEnAttente()) {
            //Validation Inscription
        } else if (!oldInscription.getEnAttente() && inscription.getEnAttente()) {
            //Suppression validation inscription
        }
    }

    public static class DemandeInscription {
        @NotNull(groups = Insert.class)
        @Valid
        private Personne personne;
        @NotNull(groups = Insert.class)
        @Valid
        @Size(groups = Insert.class, min = 1, max = 3)
        private Inscription inscriptions[];

        public boolean allCreneauDifferent() {
            Set<Long> set = new HashSet<>();
            for (Inscription inscription : inscriptions) {
                final Long id = inscription.getCreneau().getId();
                if (!set.add(id)) {
                    return false;
                }
            }
            return true;
        }

        public Inscription[] getInscriptions() {
            return inscriptions;
        }

        public void setInscriptions(Inscription[] inscriptions) {
            this.inscriptions = inscriptions;
        }

        public Personne getPersonne() {
            return personne;
        }

        public void setPersonne(Personne personne) {
            this.personne = personne;
        }

        public interface Insert {
        }
    }
}
