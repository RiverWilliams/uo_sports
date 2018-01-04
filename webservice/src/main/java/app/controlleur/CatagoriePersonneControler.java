package app.controlleur;

import app.modele.entity.CategoriePersonne;
import app.modele.entity.PieceInscription;
import app.modele.relation.Demande;
import app.modele.service.ICategoriePersonneService;
import app.modele.service.IDemandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/categories_personnes")
@CrossOrigin(exposedHeaders = "Location")
public class CatagoriePersonneControler {

    @Autowired
    private ICategoriePersonneService categoriePersonneService;

    @Autowired
    private IDemandeService demandeService;

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        categoriePersonneService.deleteById(id);
    }

    @DeleteMapping("/{idCategorie}/pieces/{idPiece}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePieceInscription(@PathVariable long idCategorie, @PathVariable long idPiece) {
        demandeService.delete(new Demande(idCategorie, idPiece));
    }

    @GetMapping
    public List<CategoriePersonne> findAll() {
        return categoriePersonneService.findAll();
    }

    @GetMapping("/{id}")
    public CategoriePersonne findById(@PathVariable Long id) {
        return categoriePersonneService.findById(id);
    }

    @GetMapping("/{idCategorie}/pieces")
    public List<PieceInscription> getPiecesInscription(@PathVariable Long idCategorie) {
        return categoriePersonneService.getPieces(idCategorie);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(CategoriePersonne.Insert.class) CategoriePersonne categoriePersonne) {
        final Long key = categoriePersonneService.insert(categoriePersonne);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(CategoriePersonne.Update.class) CategoriePersonne categoriePersonne) {
        categoriePersonneService.update(categoriePersonne);
    }

}
