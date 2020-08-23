import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSelectedColorComponent } from './print-selected-color.component';

describe('PrintSelectedColorComponent', () => {
  let component: PrintSelectedColorComponent;
  let fixture: ComponentFixture<PrintSelectedColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintSelectedColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintSelectedColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
