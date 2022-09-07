import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommessaRicercaComponent } from './commessa-ricerca.component';

describe('CommessaRicercaComponent', () => {
  let component: CommessaRicercaComponent;
  let fixture: ComponentFixture<CommessaRicercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommessaRicercaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommessaRicercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
