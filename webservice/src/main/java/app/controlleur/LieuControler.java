package app.controlleur;

import app.modele.entity.Lieu;
import app.modele.service.ILieuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/lieux")
@CrossOrigin(exposedHeaders = "Location")

public class LieuControler {

    @Autowired
    private ILieuService lieuService;

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        lieuService.deleteById(id);
    }

    @GetMapping
    public List<Lieu> findAll() {
        return lieuService.findAll();
    }

    @GetMapping("/{id}")
    public Lieu findById(@PathVariable Long id) {
        return lieuService.findById(id);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(Lieu.Insert.class) Lieu lieu) {
        final Long key = lieuService.insert(lieu);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).body(key);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(Lieu.Update.class) Lieu lieu) {
        lieuService.update(lieu);
    }

}
