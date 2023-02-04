import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApontamentoComponent } from './apontamento/apontamento.component';

const routes: Routes = [
  { path: 'apontamento', component: ApontamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
