package app.controlleur;

import app.exception.apiException.NotFoundApiException;
import app.modele.entity.CategoriePersonne;
import app.modele.service.ICategoriePersonneService;
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
public class CatagoriePersonneControler {

    @Autowired
    private ICategoriePersonneService categoriePersonneService;

    @GetMapping
    public List<CategoriePersonne> findAll() {
        return categoriePersonneService.findAll();
    }

    @GetMapping("/{id}")
    public CategoriePersonne findById(@PathVariable Long id) {
        final CategoriePersonne byId = categoriePersonneService.findById(id);
        if (byId == null) {
            throw new NotFoundApiException("La categorie de personne " + id + " n'existe pas.");
        }
        return byId;
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(CategoriePersonne.Update.class) CategoriePersonne categoriePersonne) {
        categoriePersonneService.update(categoriePersonne);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        categoriePersonneService.deleteById(id);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(CategoriePersonne.Insert.class) CategoriePersonne categoriePersonne) {
        final Long key = categoriePersonneService.insert(categoriePersonne);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).build();
    }

}
