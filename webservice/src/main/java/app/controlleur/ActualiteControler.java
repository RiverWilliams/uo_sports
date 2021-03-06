package app.controlleur;

import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;
import app.modele.relation.Concerne;
import app.modele.service.IActualiteService;
import app.modele.service.IConcerneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/actualites")
@CrossOrigin(exposedHeaders = "Location")
public class ActualiteControler {

    @Autowired
    private IActualiteService actualiteService;
    @Autowired
    private IConcerneService concerneService;

    @PostMapping("/{idActualite}/sports")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void addSport(@PathVariable long idActualite, @RequestBody long idSport) {
        concerneService.insert(new Concerne(idActualite, idSport));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        actualiteService.deleteById(id);
    }

    @DeleteMapping("/{idActualite}/sports/{idSport}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteSport(@PathVariable long idActualite, @PathVariable long idSport) {
        concerneService.delete(new Concerne(idActualite, idSport));
    }

    @GetMapping
    public List<Actualite> findAll() {
        return actualiteService.findAll();
    }

    @GetMapping("/{id}")
    public Actualite findById(@PathVariable Long id) {
        return actualiteService.findById(id);
    }

    @GetMapping("/{idActualite}/activites")
    public List<Activite> getActivites(@PathVariable Long idActualite) {
        return actualiteService.getActivites(idActualite);
    }

    @GetMapping("/{idActualite}/categories_sports")
    public List<CategorieSport> getCategoriesSports(@PathVariable Long idActualite) {
        return actualiteService.getCategoriesSports(idActualite);
    }

    @GetMapping("/{idActualite}/sports")
    public List<Sport> getSports(@PathVariable Long idActualite) {
        return actualiteService.getSports(idActualite);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(Actualite.Insert.class) Actualite actualite) {
        final Long key = actualiteService.insert(actualite);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).body(key);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(Actualite.Update.class) Actualite actualite) {
        actualiteService.update(actualite);
    }

}
