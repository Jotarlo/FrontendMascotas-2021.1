import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartamentoModelo } from 'src/app/modelos/departamento.modelo';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-crear-departamento',
  templateUrl: './crear-departamento.component.html',
  styleUrls: ['./crear-departamento.component.css']
})
export class CrearDepartamentoComponent implements OnInit {
  fgValidacion: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder,
    private servicio: DepartamentoService,
    private router: Router) { }

  ConstruirFormulario() {
    this.fgValidacion = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.ConstruirFormulario();
  }

  get ObtenerFGV() {
    return this.fgValidacion.controls;
  }

  GuardarRegistro() {
    let nom = this.ObtenerFGV.nombre.value;
    let obj = new DepartamentoModelo();
    obj.nombre = nom;
    this.servicio.GuardarRegistro(obj).subscribe(
      (datos) => {
        alert("Registro almacenado correctamente.");
        this.router.navigate(["/parametros/listar-departamento"]);
      },
      (error) => {
        alert("Error guardando el registro.");
      }
    );
  }

}
