package app.controlleur;

import app.modele.entity.Creneau;
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

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        responsableService.deleteById(id);
    }

    @GetMapping
    public List<Responsable> findAll() {
        return responsableService.findAll();
    }

    @GetMapping("/{id}")
    public Responsable findById(@PathVariable Long id) {
        return responsableService.findById(id);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(Responsable.Insert.class) Responsable responsable) {
        final Long key = responsableService.insert(responsable);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(Responsable.Update.class) Responsable responsable) {
        responsableService.update(responsable);
    }

    @GetMapping("/{id}/creneaux")
    public List<Creneau> getCreneaux(@PathVariable Long id){
        return responsableService.getCreneaux(id);
    }

}
