package app.controlleur;

import app.exception.apiException.NotFoundApiException;
import app.modele.entity.Activite;
import app.modele.service.IActiviteService;
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

    @GetMapping
    public List<Activite> findAll() {
        return activiteService.findAll();
    }

    @GetMapping("/{id}")
    public Activite findById(@PathVariable Long id) {
        final Activite byId = activiteService.findById(id);
        if (byId == null) {
            throw new NotFoundApiException("L'activite " + id + " n'existe pas.");
        }
        return byId;
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(Activite.Update.class) Activite activite) {
        activiteService.update(activite);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        activiteService.deleteById(id);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(Activite.Insert.class) Activite activite) {
        final Long key = activiteService.insert(activite);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).build();
    }

}
