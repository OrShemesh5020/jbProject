import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePresenterComponent } from './name-presenter.component';

describe('NamePresenterComponent', () => {
  let component: NamePresenterComponent;
  let fixture: ComponentFixture<NamePresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamePresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
