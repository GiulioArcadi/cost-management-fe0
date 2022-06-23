import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommessaAddComponent } from './commessa-add.component';

describe('CommessaAddComponent', () => {
  let component: CommessaAddComponent;
  let fixture: ComponentFixture<CommessaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommessaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommessaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
