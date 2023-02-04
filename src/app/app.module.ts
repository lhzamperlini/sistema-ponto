import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
