import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCiudadComponent } from './ciudad/crear-ciudad/crear-ciudad.component';
import { EditarCiudadComponent } from './ciudad/editar-ciudad/editar-ciudad.component';
import { ListarCiudadComponent } from './ciudad/listar-ciudad/listar-ciudad.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { ListarDepartamentoComponent } from './departamento/listar-departamento/listar-departamento.component';

const routes: Routes = [
  {
    path: 'crear-departamento',
    component: CrearDepartamentoComponent
  },
  {
    path: 'listar-departamento',
    component: ListarDepartamentoComponent
  },
  {
    path: 'editar-departamento/:id',
    component: EditarDepartamentoComponent
  },
  {
    path: 'crear-ciudad',
    component: CrearCiudadComponent
  },
  {
    path: 'listar-ciudad',
    component: ListarCiudadComponent
  },
  {
    path: 'editar-ciudad/:id',
    component: EditarCiudadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizacionRoutingModule { }
