import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisePracticeComponent } from './promise-practice.component';

describe('PromisePracticeComponent', () => {
  let component: PromisePracticeComponent;
  let fixture: ComponentFixture<PromisePracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromisePracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
