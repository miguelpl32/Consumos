import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { MostrarConsumosComponent } from './components/mostrar-consumos/mostrar-consumos.component';
import { CrearConsumoComponent } from './components/crear-consumo/crear-consumo.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  { path: '', component: MostrarConsumosComponent },
  { path: 'crear-consumo', component: CrearConsumoComponent },
  { path: 'editar-consumo/:id', component: CrearConsumoComponent },
  { path: 'upload', component: UploadComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
