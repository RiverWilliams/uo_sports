package app.controlleur;

import app.exception.apiException.NotFoundApiException;
import app.modele.entity.Responsable;
import app.modele.service.IResponsableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/responsables")
public class ResponsableControler {

    @Autowired
    private IResponsableService responsableService;

    @GetMapping
    public List<Responsable> findAll() {
        return responsableService.findAll();
    }

    @GetMapping("/{id}")
    public Responsable findById(@PathVariable Long id) {
        final Responsable byId = responsableService.findById(id);
        if (byId == null) {
            throw new NotFoundApiException("Le responsable " + id + " n'existe pas.");
        }
        return byId;
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(Responsable.Update.class) Responsable responsable) {
        responsableService.update(responsable);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        responsableService.deleteById(id);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(Responsable.Insert.class) Responsable responsable) {
        final Long key = responsableService.insert(responsable);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).build();
    }

}
