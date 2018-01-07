package app.controlleur;

import app.modele.entity.Creneau;
import app.modele.entity.Personne;
import app.modele.relation.Inscription;
import app.modele.service.IInscriptionService;
import app.modele.service.InscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("inscriptions")
@CrossOrigin(exposedHeaders = "Location")

public class InscriptionControler {

    @Autowired
    private IInscriptionService inscriptionService;

    @DeleteMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@RequestParam Long idPersonne, @RequestParam Long idCreneau) {
        final Inscription inscription = new Inscription();
        inscription.setPersonne(new Personne());
        inscription.setCreneau(new Creneau());

        inscription.getPersonne().setId(idPersonne);
        inscription.getCreneau().setId(idCreneau);

        inscriptionService.delete(inscription);
    }

    @PostMapping("/demande")
    public ResponseEntity<Object> demandeInscription(@RequestBody @Validated(InscriptionService.DemandeInscription.Insert.class) InscriptionService.DemandeInscription demandeInscription) {
        final Long key = inscriptionService.demandeInscriptions(demandeInscription);
        final URI uri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/personnes/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).body(uri);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void insert(@RequestBody @Validated(Inscription.Insert.class) Inscription inscription) {
        inscriptionService.insert(inscription);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(Inscription.Update.class) Inscription inscription) {
        inscriptionService.update(inscription);
    }

}
