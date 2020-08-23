import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsComponentComponent } from './students-component.component';

describe('StudentsComponentComponent', () => {
  let component: StudentsComponentComponent;
  let fixture: ComponentFixture<StudentsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
