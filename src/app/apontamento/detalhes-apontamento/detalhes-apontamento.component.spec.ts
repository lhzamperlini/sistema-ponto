import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesApontamentoComponent } from './detalhes-apontamento.component';

describe('DetalhesApontamentoComponent', () => {
  let component: DetalhesApontamentoComponent;
  let fixture: ComponentFixture<DetalhesApontamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesApontamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesApontamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
