import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  persona:Persona=new Persona();
  constructor(private service:ServiceService,private router:Router){}

  ngOnInit() {
      this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id")!;
    this.service.getPersonaId(+id).subscribe(data=>{
      this.persona=data;
    })
  }

  Actualizar(persona:Persona){
    this.service.editPersona(persona).subscribe(data=>{
      this.persona=data;
      alert("Se ha modidificado correctamente");
      this.router.navigate(["listar"]);
    })
  }
}
