package app.controlleur;

import app.modele.entity.PieceInscription;
import app.modele.service.IPieceInscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/pieces_inscription")
@CrossOrigin(exposedHeaders = "Location")

public class PieceInscriptionControler {

    @Autowired
    private IPieceInscriptionService pieceInscriptionService;

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        pieceInscriptionService.deleteById(id);
    }

    @GetMapping
    public List<PieceInscription> findAll() {
        return pieceInscriptionService.findAll();
    }

    @GetMapping("/{id}")
    public PieceInscription findById(@PathVariable Long id) {
        return pieceInscriptionService.findById(id);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody @Validated(PieceInscription.Insert.class) PieceInscription pieceInscription) {
        final Long key = pieceInscriptionService.insert(pieceInscription);
        final URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(key).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@RequestBody @Validated(PieceInscription.Update.class) PieceInscription pieceInscription) {
        pieceInscriptionService.update(pieceInscription);
    }

}
