import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarApontamentoComponent } from './registrar-apontamento.component';

describe('RegistrarApontamentoComponent', () => {
  let component: RegistrarApontamentoComponent;
  let fixture: ComponentFixture<RegistrarApontamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarApontamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarApontamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
