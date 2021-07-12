import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from '../config/datos.generales';
import { CiudadModelo } from '../modelos/ciudad.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  url: String = DatosGenerales.urlBackend;
  token?: String = "";
  constructor(private http: HttpClient, private servicioSeguridad: SeguridadService) {
    this.token = servicioSeguridad.ObtenerToken();
  }

  ListarRegistros(): Observable<CiudadModelo[]> {
    return this.http.get<CiudadModelo[]>(`${this.url}/ciudad/?filter={"include":["departamento"]}`, {
      headers: new HttpHeaders({
      })
    });
  }

  BuscarRegistro(id: number): Observable<CiudadModelo> {
    return this.http.get<CiudadModelo>(`${this.url}/ciudad/${id}`, {
      headers: new HttpHeaders({
      })
    });
  }

  GuardarRegistro(modelo: CiudadModelo): Observable<CiudadModelo> {
    let idDepto = 0;
    if(modelo.departamentoId){
      idDepto = parseInt(modelo.departamentoId.toString());
    }
    return this.http.post<CiudadModelo>(`${this.url}/ciudad`, {
      nombre: modelo.nombre,
      departamentoId: idDepto
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  ActualizarRegistro(modelo: CiudadModelo): Observable<CiudadModelo> {
    let idDepto = 0;
    if(modelo.departamentoId){
      idDepto = parseInt(modelo.departamentoId.toString());
    }
    return this.http.put<CiudadModelo>(`${this.url}/ciudad/${modelo.id}`, {
      nombre: modelo.nombre,
      departamentoId: idDepto
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  EliminarRegistro(modelo: CiudadModelo): Observable<any> {
    return this.http.delete<any>(`${this.url}/ciudad/${modelo.id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

}
