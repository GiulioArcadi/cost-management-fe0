import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioDipendentiComponent } from './dettaglio-dipendenti.component';

describe('DettaglioDipendentiComponent', () => {
  let component: DettaglioDipendentiComponent;
  let fixture: ComponentFixture<DettaglioDipendentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioDipendentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioDipendentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
