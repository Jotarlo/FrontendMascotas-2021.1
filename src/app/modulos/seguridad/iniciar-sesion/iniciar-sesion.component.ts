import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModelo } from 'src/app/modelos/Usuario.modelo';
import * as crypto from 'crypto-js';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  fgValidacion: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) { }

  ConstruirFormulario() {
    this.fgValidacion = this.fb.group({
      correo: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.ConstruirFormulario();
  }

  get ObtenerFGV() {
    return this.fgValidacion.controls;
  }

  IdentificarUsuario() {
    let usuario = this.ObtenerFGV.correo.value;
    let clave = this.ObtenerFGV.clave.value;
    let modelo = new UsuarioModelo();
    modelo.nombre_usuario = usuario;
    modelo.clave = crypto.MD5(clave).toString();
    this.servicioSeguridad.IdentificarUsuario(modelo).subscribe(
      (data: UsuarioModelo) => {
        this.servicioSeguridad.GuardarDatosEnLocal(data);
        this.router.navigate(["/"]);
      },
      (error: any) => {
        alert("Datos inválidos");
      }
    );
  }

}
