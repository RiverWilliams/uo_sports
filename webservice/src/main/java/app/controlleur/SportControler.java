package app.controlleur;

import app.exception.apiException.NotFoundApiException;
import app.modele.entity.Sport;
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
public class SportControler {

    @Autowired
    private ISportService sportService;

    @GetMapping
    public List<Sport> findAll() {
        return sportService.findAll();
    }

    @GetMapping("/{id}")
    public Sport findById(@PathVariable Long id) {
        final Sport byId = sportService.findById(id);
        if (byId == null) {
            throw new NotFoundApiException("Le sport " + id + " n'existe pas.");
        }
        return byId;
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(Sport.Update.class) Sport sport) {
        sportService.update(sport);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        sportService.deleteById(id);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(Sport.Insert.class) Sport sport) {
        final Long key = sportService.insert(sport);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).build();
    }

}
