import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoModelo } from 'src/app/modelos/departamento.modelo';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css']
})
export class EditarDepartamentoComponent implements OnInit {
  fgValidacion: FormGroup = this.fb.group({});
  id: number = 0;

  constructor(private fb: FormBuilder,
    private servicio: DepartamentoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ConstruirFormulario() {
    this.fgValidacion = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.ConstruirFormulario();
    this.id = this.route.snapshot.params["id"];
    this.servicio.BuscarRegistro(this.id).subscribe(
      (datos) =>{
        this.ObtenerFGV.id.setValue(datos.id);
        this.ObtenerFGV.nombre.setValue(datos.nombre);
      },
      (error) =>{
        alert("No se encuentra el registro.")
      }
    );
  }

  get ObtenerFGV() {
    return this.fgValidacion.controls;
  }

  ActualizarRegistro() {
    let id = this.ObtenerFGV.id.value;
    let nom = this.ObtenerFGV.nombre.value;
    let obj = new DepartamentoModelo();
    obj.nombre = nom;
    obj.id = id;
    this.servicio.ActualizarRegistro(obj).subscribe(
      (datos) => {
        alert("Registro actualizado correctamente.");
        this.router.navigate(["/parametros/listar-departamento"]);
      },
      (error) => {
        alert("Error actualizando el registro.");
      }
    );
  }

}
