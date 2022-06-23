import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociaRisorsaComponent } from './associa-risorsa.component';

describe('AssociaRisorsaComponent', () => {
  let component: AssociaRisorsaComponent;
  let fixture: ComponentFixture<AssociaRisorsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociaRisorsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociaRisorsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
