import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryNavBarComponent } from './gallery-nav-bar.component';

describe('GalleryNavBarComponent', () => {
  let component: GalleryNavBarComponent;
  let fixture: ComponentFixture<GalleryNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
