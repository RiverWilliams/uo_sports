package app.controlleur;

import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;
import app.modele.service.ICategorieSportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/categories_sports")
@CrossOrigin
public class CategorieSportControler {

    @Autowired
    private ICategorieSportService categorieSportService;

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        categorieSportService.deleteById(id);
    }

    @GetMapping
    public List<CategorieSport> findAll() {
        return categorieSportService.findAll();
    }

    @GetMapping("/{id}")
    public CategorieSport findById(@PathVariable Long id) {
        return categorieSportService.findById(id);
    }

    @GetMapping("/{idCategorie}/activites")
    public List<Activite> getActivites(@PathVariable Long idCategorie) {
        return categorieSportService.getActivites(idCategorie);
    }

    @GetMapping("/{idCategorie}/actualites")
    public List<Actualite> getActualites(@PathVariable Long idCategorie) {
        return categorieSportService.getActualites(idCategorie);
    }

    @GetMapping("/{idCategorie}/sports")
    public List<Sport> getSports(@PathVariable Long idCategorie) {
        return categorieSportService.getSports(idCategorie);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(CategorieSport.Insert.class) CategorieSport categorieSport) {
        final Long key = categorieSportService.insert(categorieSport);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(CategorieSport.Update.class) CategorieSport categorieSport) {
        categorieSportService.update(categorieSport);
    }

}
