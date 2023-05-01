
package com.example.BackEnd.models.service;

import com.example.BackEnd.models.entity.Persona;
import java.util.List;

public interface PersonaService {
    List<Persona>listar();
    Persona listarId(int id);
    Persona add(Persona p);
    Persona delete(int id);
    Persona edit(Persona p);
}
