import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms';
import { Apontamento } from 'src/app/models/apontamento/apontamento.model';

@Component({
  selector: 'app-registrar-apontamento',
  templateUrl: './registrar-apontamento.component.html',
  styleUrls: ['./registrar-apontamento.component.scss']
})
export class RegistrarApontamentoComponent {
  formularioApontamento: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formularioApontamento = formBuilder.group({
      modulo: [null, Validators.required],
      data: [null, Validators.required],
      horas: [null, Validators.required],
      minutos: [null, Validators.required],
      descricao: [null, Validators.required]
    })
  }

  registrarApontamento(){
    var apontamento:  Apontamento = new Apontamento()
    apontamento.data = this.formularioApontamento.get('data')?.value
    apontamento.horas = this.formularioApontamento.get('horas')?.value
    apontamento.minutos = this.formularioApontamento.get('minutos')?.value
    apontamento.descricao = this.formularioApontamento.get('descricao')?.value
    // Aqui vai o Service para salvar o apontamento
  }
}
