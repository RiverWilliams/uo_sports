package app.controlleur;

import app.exception.apiException.NotFoundApiException;
import app.modele.entity.Creneau;
import app.modele.service.ICreneauService;
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
public class CreneauControler {

    @Autowired
    private ICreneauService creneauService;

    @GetMapping
    public List<Creneau> findAll() {
        return creneauService.findAll();
    }

    @GetMapping("/{id}")
    public Creneau findById(@PathVariable Long id) {
        final Creneau byId = creneauService.findById(id);
        if (byId == null) {
            throw new NotFoundApiException("Le creneau " + id + " n'existe pas.");
        }
        return byId;
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(Creneau.Update.class) Creneau creneau) {
        creneauService.update(creneau);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        creneauService.deleteById(id);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(Creneau.Insert.class) Creneau creneau) {
        final Long key = creneauService.insert(creneau);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).build();
    }

}
