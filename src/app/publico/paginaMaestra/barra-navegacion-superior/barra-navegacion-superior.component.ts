import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioModelo } from 'src/app/modelos/Usuario.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion-superior',
  templateUrl: './barra-navegacion-superior.component.html',
  styleUrls: ['./barra-navegacion-superior.component.css']
})
export class BarraNavegacionSuperiorComponent implements OnInit {

  isLoggedIn: boolean = false;

  suscripcion: Subscription = new Subscription();

  constructor(private servicioSeguridad: SeguridadService) { }



  ngOnInit(): void {
    this.suscripcion = this.servicioSeguridad.ObtenerDatosSession().subscribe((datos: UsuarioModelo) => {
      console.log(datos);
      this.isLoggedIn = datos.isLoggedIn;
    });
  }

}
