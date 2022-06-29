import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipologiacontrattoComponent } from './tipologiacontratto.component';

describe('TipologiacontrattoComponent', () => {
  let component: TipologiacontrattoComponent;
  let fixture: ComponentFixture<TipologiacontrattoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipologiacontrattoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipologiacontrattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
