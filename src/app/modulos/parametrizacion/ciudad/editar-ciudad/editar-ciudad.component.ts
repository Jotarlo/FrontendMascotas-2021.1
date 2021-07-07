import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CiudadModelo } from 'src/app/modelos/ciudad.modelo';
import { DepartamentoModelo } from 'src/app/modelos/departamento.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-editar-ciudad',
  templateUrl: './editar-ciudad.component.html',
  styleUrls: ['./editar-ciudad.component.css']
})
export class EditarCiudadComponent implements OnInit {
  fgValidacion: FormGroup = this.fb.group({});
  deptoListado: DepartamentoModelo[] = [];
id: number = 0;
  constructor(private fb: FormBuilder,
    private servicio: CiudadService,
    private router: Router,
    private servicioDepartamento: DepartamentoService,
    private route: ActivatedRoute) { }

  ConstruirFormulario() {
    this.fgValidacion = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      departamentoId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.ConstruirFormulario();
    this.CargarDepartamentos();

  }

  CargarDepartamentos(){
    this.servicioDepartamento.ListarRegistros().subscribe(
      (datos) =>{
        this.deptoListado = datos;
        this.BuscarRegistro();
      },
      (erro) =>{
        alert("error cargando los deptos")
      }
    );
  }

  BuscarRegistro(){
    this.id = this.route.snapshot.params["id"];
    this.servicio.BuscarRegistro(this.id).subscribe(
      (datos) =>{
        this.ObtenerFGV.id.setValue(datos.id);
        this.ObtenerFGV.nombre.setValue(datos.nombre);
        this.ObtenerFGV.departamentoId.setValue(datos.departamentoId);
      },
      (error) =>{
        alert("No se encuentra el registro.")
      }
    );
  }

  get ObtenerFGV() {
    return this.fgValidacion.controls;
  }

  GuardarRegistro() {
    let nom = this.ObtenerFGV.nombre.value;
    let deptoId = this.ObtenerFGV.departamentoId.value;
    let id = this.ObtenerFGV.id.value;
    let obj = new CiudadModelo();
    obj.id = id;
    obj.nombre = nom;
    obj.departamentoId = deptoId;
    this.servicio.ActualizarRegistro(obj).subscribe(
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
