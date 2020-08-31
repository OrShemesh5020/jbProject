import { ComponentType } from './../layoutModel/layout.model';
import { LayoutService } from './../layoutService/layout.service';
import { Component, OnInit } from '@angular/core';
import { Layout } from '../layoutModel/layout.model';

@Component({
  selector: 'app-gallery-nav-bar',
  templateUrl: './gallery-nav-bar.component.html',
  styleUrls: ['./gallery-nav-bar.component.scss'],
})
export class GalleryNavBarComponent implements OnInit {
  galleryLayoutMenu: Layout[];
  constructor(private layoutService: LayoutService) {
    this.galleryLayoutMenu = this.layoutService.getByType(
      ComponentType.GALLERY
    );
  }

  ngOnInit(): void {}
}
