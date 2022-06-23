import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDipendenteComponent } from './create-dipendente.component';

describe('CreateDipendenteComponent', () => {
  let component: CreateDipendenteComponent;
  let fixture: ComponentFixture<CreateDipendenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDipendenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDipendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
