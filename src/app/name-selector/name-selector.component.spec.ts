import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameSelectorComponent } from './name-selector.component';

describe('NameSelectorComponent', () => {
  let component: NameSelectorComponent;
  let fixture: ComponentFixture<NameSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
