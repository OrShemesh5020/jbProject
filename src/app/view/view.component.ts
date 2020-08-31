import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from './../gallery.service';
import { DummyService } from './../service/dummy.service';
import {
  GalleryElement,
  GalleryElementType,
} from './../gallery-component/gallery-component.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  selectedGalleryElement: GalleryElement;
  galleryElementIndex: number;
  galleryElements: GalleryElement[];

  galleryElementType = GalleryElementType;
  constructor(private galleryService: GalleryService, private router: Router) {}

  ngOnInit(): void {
    // console.log('sdjvndsvljs');
    this.galleryElements = this.galleryService.getAllElements();
    // console.log(this.galleryElements);
  }

  selectedElement(galleryElement: GalleryElement): void {
    this.selectedGalleryElement = galleryElement;
    console.log(this.selectedGalleryElement);
  }
  closePreview(): void {
    this.selectedGalleryElement = null;
  }
  changeNavigation(galleryElement: GalleryElement): void {
    this.selectedElement(galleryElement);
    this.router.navigate(['gallery/edit', this.selectedGalleryElement.id - 1]);
  }
}
