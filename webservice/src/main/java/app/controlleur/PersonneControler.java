package app.controlleur;

import app.modele.entity.Personne;
import app.modele.relation.Inscription;
import app.modele.service.IPersonneService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/personnes")
@CrossOrigin(exposedHeaders = "Location")

public class PersonneControler {

    @Autowired
    private IPersonneService personneService;

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        personneService.deleteById(id);
    }

    @GetMapping
    public List<Personne> findAll() {
        return personneService.findAll();
    }

    @GetMapping("/{id}")
    public Personne findById(@PathVariable Long id) {
        return personneService.findById(id);
    }

    @GetMapping("/{id}/inscriptions")
    @JsonView(Inscription.Views.Creneau.class)
    public List<Inscription> getInscriptions(@PathVariable Long id) {
        return personneService.getInscriptions(id);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(Personne.Insert.class) Personne personne) {
        final Long key = personneService.insert(personne);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).body(key);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(Personne.Update.class) Personne personne) {
        personneService.update(personne);
    }

}
