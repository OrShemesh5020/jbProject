import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameRecieverComponent } from './name-reciever.component';

describe('NameRecieverComponent', () => {
  let component: NameRecieverComponent;
  let fixture: ComponentFixture<NameRecieverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameRecieverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameRecieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
