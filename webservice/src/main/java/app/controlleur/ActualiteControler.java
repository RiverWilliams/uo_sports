package app.controlleur;

import app.exception.apiException.NotFoundApiException;
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
public class ActualiteControler {

    @Autowired
    private IActualiteService actualiteService;
    @Autowired
    private IConcerneService concerneService;

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
        final Actualite byId = actualiteService.findById(id);
        if (byId == null) {
            throw new NotFoundApiException("L'actualite " + id + " n'existe pas.");
        }
        return byId;
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
        return ResponseEntity.created(uri).build();
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(Actualite.Update.class) Actualite actualite) {
        actualiteService.update(actualite);
    }

}
