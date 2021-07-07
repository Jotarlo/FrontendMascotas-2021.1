import { Component, OnInit } from '@angular/core';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';

@Component({
  selector: 'app-listar-ciudad',
  templateUrl: './listar-ciudad.component.html',
  styleUrls: ['./listar-ciudad.component.css']
})
export class ListarCiudadComponent implements OnInit {
  pagina: number = 1;
  listaRegistros: CiudadModelo[] = [];
  constructor(private servicio: CiudadService) { }

  ngOnInit(): void {
    this.servicio.ListarRegistros().subscribe(
      (datos) =>{
        this.listaRegistros = datos;
      },
      (error) =>{
        alert("Error listando los registros.")
      }
    );
  }

  VerificarEliminacion(id?: number, nombre?: String){
    if(window.confirm("Relamente desea eliminar el registro de " + nombre)){
      let modelo = new CiudadModelo();
      modelo.id = id;
      modelo.nombre = nombre;
      this.servicio.EliminarRegistro(modelo).subscribe(
        (datos) =>{
          alert("El registro " + nombre + " ha sido eliminado correctamente");
          this.listaRegistros = this.listaRegistros.filter(x => x.id != id);
        },
        (error) =>{
          alert("Error eliminando el registro " + nombre)
        }
      );
    }
  }

}
