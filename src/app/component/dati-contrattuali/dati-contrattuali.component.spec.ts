import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatiContrattualiComponent } from './dati-contrattuali.component';

describe('DatiContrattualiComponent', () => {
  let component: DatiContrattualiComponent;
  let fixture: ComponentFixture<DatiContrattualiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatiContrattualiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatiContrattualiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
