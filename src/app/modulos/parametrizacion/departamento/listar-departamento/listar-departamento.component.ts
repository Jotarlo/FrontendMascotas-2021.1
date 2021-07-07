import { Component, OnInit } from '@angular/core';
import { DepartamentoModelo } from 'src/app/modelos/departamento.modelo';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-listar-departamento',
  templateUrl: './listar-departamento.component.html',
  styleUrls: ['./listar-departamento.component.css']
})
export class ListarDepartamentoComponent implements OnInit {
  pagina: number = 1;
  listaRegistros: DepartamentoModelo[] = [];
  constructor(private servicio: DepartamentoService) { }

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
      let modelo = new DepartamentoModelo();
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
