import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificadorSesionGuard } from 'src/app/guardianes/verificador-sesion.guard';
import { CrearCiudadComponent } from './ciudad/crear-ciudad/crear-ciudad.component';
import { EditarCiudadComponent } from './ciudad/editar-ciudad/editar-ciudad.component';
import { ListarCiudadComponent } from './ciudad/listar-ciudad/listar-ciudad.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { ListarDepartamentoComponent } from './departamento/listar-departamento/listar-departamento.component';

const routes: Routes = [
  {
    path: 'crear-departamento',
    component: CrearDepartamentoComponent,
    canActivate: [VerificadorSesionGuard]
  },
  {
    path: 'listar-departamento',
    component: ListarDepartamentoComponent,
    canActivate: [VerificadorSesionGuard]
  },
  {
    path: 'editar-departamento/:id',
    component: EditarDepartamentoComponent,
    canActivate: [VerificadorSesionGuard]
  },
  {
    path: 'crear-ciudad',
    component: CrearCiudadComponent,
    canActivate: [VerificadorSesionGuard]
  },
  {
    path: 'listar-ciudad',
    component: ListarCiudadComponent,
    canActivate: [VerificadorSesionGuard]
  },
  {
    path: 'editar-ciudad/:id',
    component: EditarCiudadComponent,
    canActivate: [VerificadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizacionRoutingModule { }
