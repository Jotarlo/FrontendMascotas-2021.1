import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../servicios/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VerificadorNoSesionGuard implements CanActivate {
  
  constructor(private servicioSeguridad: SeguridadService,
    private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let tieneSesionActiva = this.servicioSeguridad.ObtenerToken() != "";
      if(!tieneSesionActiva){
        return true;
      }else{
        this.router.navigate(["/inicio"]);
        return false;
      }

  }
  
}
