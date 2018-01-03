package app.controlleur;

import app.modele.entity.Creneau;
import app.modele.relation.Inscription;
import app.modele.service.ICreneauService;
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
@RequestMapping("/creneaux")
@CrossOrigin

public class CreneauControler {

    @Autowired
    private ICreneauService creneauService;

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        creneauService.deleteById(id);
    }

    @GetMapping
    public List<Creneau> findAll() {
        return creneauService.findAll();
    }

    @GetMapping("/{id}")
    public Creneau findById(@PathVariable Long id) {
        return creneauService.findById(id);
    }

    @GetMapping("/{id}/en_attentes")
    @JsonView(Inscription.Views.Personne.class)
    public List<Inscription> getEnAttentes(@PathVariable Long id) {
        return creneauService.getEnAttentes(id);
    }

    @GetMapping("/{id}/inscrits")
    @JsonView(Inscription.Views.Personne.class)
    public List<Inscription> getInscrits(@PathVariable Long id) {
        return creneauService.getInscrits(id);
    }


    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(Creneau.Insert.class) Creneau creneau) {
        final Long key = creneauService.insert(creneau);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(Creneau.Update.class) Creneau creneau) {
        creneauService.update(creneau);
    }

}
