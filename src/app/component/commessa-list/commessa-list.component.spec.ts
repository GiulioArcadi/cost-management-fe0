import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommessaListComponent } from './commessa-list.component';

describe('CommessaListComponent', () => {
  let component: CommessaListComponent;
  let fixture: ComponentFixture<CommessaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommessaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommessaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
