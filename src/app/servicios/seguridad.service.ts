import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatosGenerales } from '../config/datos.generales';
import { UsuarioModelo } from '../modelos/Usuario.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  url: String = DatosGenerales.urlBackend;
  datosUsuarioSession = new BehaviorSubject<UsuarioModelo>(new UsuarioModelo());

  constructor(private http: HttpClient) { 
    this.VerificarDatosSession();
  }

  VerificarDatosSession(){
    let datos = this.ObtenerDatosLocalStorage();
    if(datos){
      let objetoDatos:UsuarioModelo = JSON.parse(datos);
      objetoDatos.isLoggedIn = true;
      this.RefrescarDatosSession(objetoDatos);
    }
  }

  ObtenerDatosLocalStorage(){
    let datos = localStorage.getItem("sessionData");
    return datos;
  }

  RefrescarDatosSession(usuario: UsuarioModelo) {
    this.datosUsuarioSession.next(usuario);
  }

  ObtenerDatosSession(){
    return this.datosUsuarioSession.asObservable();
  }

  IdentificarUsuario(usuario: UsuarioModelo): Observable<any> {
    return this.http.post<any>(`${this.url}/identificar`, {
      nombre_usuario: usuario.nombre_usuario,
      clave: usuario.clave
    }, {
      headers: new HttpHeaders({

      })
    });
  }

  GuardarDatosEnLocal(usuario: UsuarioModelo): Boolean {
    let datosLocales = localStorage.getItem("sessionData");
    if (datosLocales) {
      return false;
    } else {
      let datos = {
        id: usuario.user?.id,
        username: usuario.user?.nombre_usuario,
        token: usuario.token
      };
      let datosString = JSON.stringify(datos);
      localStorage.setItem("sessionData", datosString);
      usuario.isLoggedIn = true;
      this.RefrescarDatosSession(usuario);
      return true;
    }
  }

  CerrarSesion(){
    localStorage.removeItem("sessionData");
    this.RefrescarDatosSession(new UsuarioModelo());
  }

}
