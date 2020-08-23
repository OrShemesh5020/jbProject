import { GalleryComponentComponent } from './../gallery-component/gallery-component.component';
import {
  GalleryElement,
  GalleryElementType,
} from './../gallery-component/gallery-component.model';
import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-preview-component',
  templateUrl: './preview-component.component.html',
  styleUrls: ['./preview-component.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PreviewComponentComponent implements OnInit {
  @Input() previewGalleryElement: GalleryElement;
  @Input() previewGalleryElements: GalleryElement[];
  @Input() galleryElementIndex: number;
  @Output() closePreview: EventEmitter<void> = new EventEmitter();

  galleryElementType = GalleryElementType;
  constructor() {}

  ngOnInit(): void {}

  moveForward(): void {
    this.galleryElementIndex++;
    if (this.galleryElementIndex === this.previewGalleryElements.length) {
      this.galleryElementIndex = 0;
    }
    this.previewGalleryElement = this.previewGalleryElements[
      this.galleryElementIndex
    ];
  }
  moveBack(): void {
    this.galleryElementIndex--;
    if (this.galleryElementIndex < 0) {
      this.galleryElementIndex = this.previewGalleryElements.length - 1;
    }
    this.previewGalleryElement = this.previewGalleryElements[
      this.galleryElementIndex
    ];
  }
  onClosePreview(): void {
    this.closePreview.emit();
  }
}
