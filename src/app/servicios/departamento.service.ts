import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from '../config/datos.generales';
import { DepartamentoModelo } from '../modelos/departamento.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  url: String = DatosGenerales.urlBackend;
  token?: String = "";
  constructor(private http: HttpClient, private servicioSeguridad: SeguridadService) {
    this.token = servicioSeguridad.ObtenerToken();
  }

  ListarRegistros(): Observable<DepartamentoModelo[]> {
    return this.http.get<DepartamentoModelo[]>(`${this.url}/departamentos/`, {
      headers: new HttpHeaders({
      })
    });
  }

  BuscarRegistro(id: number): Observable<DepartamentoModelo> {
    return this.http.get<DepartamentoModelo>(`${this.url}/departamentos/${id}`, {
      headers: new HttpHeaders({
      })
    });
  }

  GuardarRegistro(modelo: DepartamentoModelo): Observable<DepartamentoModelo> {
    return this.http.post<DepartamentoModelo>(`${this.url}/departamentos`, {
      nombre: modelo.nombre
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  ActualizarRegistro(modelo: DepartamentoModelo): Observable<DepartamentoModelo> {
    return this.http.put<DepartamentoModelo>(`${this.url}/departamentos/${modelo.id}`, modelo, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  EliminarRegistro(modelo: DepartamentoModelo): Observable<any> {
    return this.http.delete<any>(`${this.url}/departamentos/${modelo.id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

}
