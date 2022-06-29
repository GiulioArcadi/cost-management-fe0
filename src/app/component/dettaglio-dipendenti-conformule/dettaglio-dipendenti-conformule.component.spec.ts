import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioDipendentiConformuleComponent } from './dettaglio-dipendenti-conformule.component';

describe('DettaglioDipendentiConformuleComponent', () => {
  let component: DettaglioDipendentiConformuleComponent;
  let fixture: ComponentFixture<DettaglioDipendentiConformuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioDipendentiConformuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioDipendentiConformuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
