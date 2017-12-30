package app.modele.service;

import app.modele.entity.Creneau;
import app.modele.entity.Responsable;

import java.util.List;

public interface IResponsableService extends IServiceEntity<Responsable, Long> {

    List<Creneau> getCreneaux(Long id);
}
