import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray} from '@angular/forms';

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
    console.log(this.formularioApontamento.value)
  }
}
