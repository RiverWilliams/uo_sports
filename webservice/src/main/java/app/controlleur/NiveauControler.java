package app.controlleur;

import app.exception.apiException.NotFoundApiException;
import app.modele.entity.Niveau;
import app.modele.service.INiveauService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/niveaux")
public class NiveauControler {

    @Autowired
    private INiveauService niveauService;

    @GetMapping
    public List<Niveau> findAll() {
        return niveauService.findAll();
    }

    @GetMapping("/{id}")
    public Niveau findById(@PathVariable Long id) {
        final Niveau byId = niveauService.findById(id);
        if (byId == null) {
            throw new NotFoundApiException("Le niveau " + id + " n'existe pas.");
        }
        return byId;
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(Niveau.Update.class) Niveau niveau) {
        niveauService.update(niveau);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        niveauService.deleteById(id);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(Niveau.Insert.class) Niveau niveau) {
        final Long key = niveauService.insert(niveau);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).build();
    }

}
