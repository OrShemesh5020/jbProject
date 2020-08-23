import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeNavBarComponent } from './exe-nav-bar.component';

describe('ExeNavBarComponent', () => {
  let component: ExeNavBarComponent;
  let fixture: ComponentFixture<ExeNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExeNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
