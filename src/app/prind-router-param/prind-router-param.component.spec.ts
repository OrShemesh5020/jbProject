import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrindRouterParamComponent } from './prind-router-param.component';

describe('PrindRouterParamComponent', () => {
  let component: PrindRouterParamComponent;
  let fixture: ComponentFixture<PrindRouterParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrindRouterParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrindRouterParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
