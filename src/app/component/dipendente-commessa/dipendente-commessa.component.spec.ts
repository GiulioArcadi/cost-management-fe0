import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendenteCommessaComponent } from './dipendente-commessa.component';

describe('DipendenteCommessaComponent', () => {
  let component: DipendenteCommessaComponent;
  let fixture: ComponentFixture<DipendenteCommessaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipendenteCommessaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DipendenteCommessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
