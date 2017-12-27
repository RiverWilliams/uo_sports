package app.controlleur;

import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;
import app.modele.relation.DeType;
import app.modele.service.IActiviteService;
import app.modele.service.IDeTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/activites")
public class ActiviteControler {

    @Autowired
    private IActiviteService activiteService;

    @Autowired
    private IDeTypeService deTypeService;

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        activiteService.deleteById(id);
    }

    @DeleteMapping("/{idActivite}/sports/{idSport}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteSport(@PathVariable long idActivite, @PathVariable long idSport) {
        deTypeService.delete(new DeType(idSport, idActivite));
    }

    @GetMapping
    public List<Activite> findAll() {
        return activiteService.findAll();
    }

    @GetMapping("/{id}")
    public Activite findById(@PathVariable Long id) {
        return activiteService.findById(id);
    }

    @GetMapping("/{idActivite}/actualites")
    public List<Actualite> getActualites(@PathVariable Long idActivite) {
        return activiteService.getActualites(idActivite);
    }

    @GetMapping("/{idActivite}/categories_sports")
    public List<CategorieSport> getCategoriesSports(@PathVariable Long idActivite) {
        return activiteService.getCategoriesSports(idActivite);
    }

    @GetMapping("/{idActivite}/sports")
    public List<Sport> getSports(@PathVariable Long idActivite) {
        return activiteService.getSports(idActivite);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(Activite.Insert.class) Activite activite) {
        final Long key = activiteService.insert(activite);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(Activite.Update.class) Activite activite) {
        activiteService.update(activite);
    }

}
