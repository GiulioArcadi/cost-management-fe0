import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioDipendentiStoricoComponent } from './dettaglio-dipendenti-storico.component';

describe('DettaglioDipendentiStoricoComponent', () => {
  let component: DettaglioDipendentiStoricoComponent;
  let fixture: ComponentFixture<DettaglioDipendentiStoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioDipendentiStoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioDipendentiStoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
