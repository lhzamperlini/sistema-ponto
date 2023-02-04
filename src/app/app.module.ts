import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ApontamentoComponent } from './apontamento/apontamento.component';
import { RegistrarApontamentoComponent } from './apontamento/registrar-apontamento/registrar-apontamento.component';
import { DetalhesApontamentoComponent } from './apontamento/detalhes-apontamento/detalhes-apontamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ApontamentoComponent,
    RegistrarApontamentoComponent,
    DetalhesApontamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
