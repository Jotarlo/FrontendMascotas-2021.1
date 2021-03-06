import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificadorNoSesionGuard } from 'src/app/guardianes/verificador-no-sesion.guard';
import { VerificadorSesionGuard } from 'src/app/guardianes/verificador-sesion.guard';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {
    path:'iniciar-sesion',
    component: IniciarSesionComponent,
    canActivate:[VerificadorNoSesionGuard]
  },
  {
    path:'cerrar-sesion',
    component: CerrarSesionComponent,
    canActivate: [VerificadorSesionGuard]
  },
  {
    path:'cambio-clave',
    component: CambiarClaveComponent,
    canActivate: [VerificadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
