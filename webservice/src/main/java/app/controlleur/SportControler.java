package app.controlleur;

import app.modele.entity.Activite;
import app.modele.entity.Actualite;
import app.modele.entity.CategorieSport;
import app.modele.entity.Sport;
import app.modele.relation.Appartient;
import app.modele.service.IAppartientService;
import app.modele.service.ISportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/sports")
@CrossOrigin(exposedHeaders = "Location")

public class SportControler {
    @Autowired
    private ISportService sportService;


    @Autowired
    private IAppartientService appartientService;

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        sportService.deleteById(id);
    }

    @DeleteMapping("/{idSport}/categories/{idCategorie}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteSport(@PathVariable long idSport, @PathVariable long idCategorie) {
        appartientService.delete(new Appartient(idCategorie, idSport));
    }

    @GetMapping
    public List<Sport> findAll() {
        return sportService.findAll();
    }

    @GetMapping("/{id}")
    public Sport findById(@PathVariable Long id) {
        return sportService.findById(id);
    }

    @GetMapping("/{idSport}/activites")
    public List<Activite> getActivites(@PathVariable Long idSport) {
        return sportService.getActivites(idSport);
    }

    @GetMapping("/{idSport}/actualites")
    public List<Actualite> getActualites(@PathVariable Long idSport) {
        return sportService.getActualites(idSport);
    }

    @GetMapping("/{idSport}/categories")
    public List<CategorieSport> getCategoriesSports(@PathVariable Long idSport) {
        return sportService.getCategoriesSports(idSport);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(Sport.Insert.class) Sport sport) {
        final Long key = sportService.insert(sport);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(Sport.Update.class) Sport sport) {
        sportService.update(sport);
    }

}
