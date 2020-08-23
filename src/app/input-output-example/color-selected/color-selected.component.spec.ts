import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSelectedComponent } from './color-selected.component';

describe('ColorSelectedComponent', () => {
  let component: ColorSelectedComponent;
  let fixture: ComponentFixture<ColorSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
