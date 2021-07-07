import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { DepartamentoModelo } from 'src/app/modelos/departamento.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css']
})
export class CrearCiudadComponent implements OnInit {
  fgValidacion: FormGroup = this.fb.group({});
  deptoListado: DepartamentoModelo[] = [];

  constructor(private fb: FormBuilder,
    private servicio: CiudadService,
    private router: Router,
    private servicioDepartamento: DepartamentoService) { }

  ConstruirFormulario() {
    this.fgValidacion = this.fb.group({
      nombre: ['', Validators.required],
      departamentoId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.ConstruirFormulario();
    this.servicioDepartamento.ListarRegistros().subscribe(
      (datos) =>{
        this.deptoListado = datos;
      },
      (erro) =>{
        alert("error cargando los deptos")
      }
    );
  }

  get ObtenerFGV() {
    return this.fgValidacion.controls;
  }

  GuardarRegistro() {
    let nom = this.ObtenerFGV.nombre.value;
    let deptoId = this.ObtenerFGV.departamentoId.value;
    let obj = new CiudadModelo();
    obj.nombre = nom;
    obj.departamentoId = deptoId;
    this.servicio.GuardarRegistro(obj).subscribe(
      (datos) => {
        alert("Registro almacenado correctamente.");
        this.router.navigate(["/parametros/listar-ciudad"]);
      },
      (error) => {
        alert("Error guardando el registro.");
      }
    );
  }

}
