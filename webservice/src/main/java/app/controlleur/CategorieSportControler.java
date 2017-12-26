package app.controlleur;

import app.exception.apiException.NotFoundApiException;
import app.modele.entity.CategorieSport;
import app.modele.service.ICategorieSportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/categories_sports")
public class CategorieSportControler {

    @Autowired
    private ICategorieSportService categorieSportService;

    @GetMapping
    public List<CategorieSport> findAll() {
        return categorieSportService.findAll();
    }

    @GetMapping("/{id}")
    public CategorieSport findById(@PathVariable Long id) {
        final CategorieSport byId = categorieSportService.findById(id);
        if (byId == null) {
            throw new NotFoundApiException("La categorie de sport " + id + " n'existe pas.");
        }
        return byId;
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(CategorieSport.Update.class) CategorieSport categorieSport) {
        categorieSportService.update(categorieSport);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        categorieSportService.deleteById(id);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(CategorieSport.Insert.class) CategorieSport categorieSport) {
        final Long key = categorieSportService.insert(categorieSport);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).build();
    }

}
