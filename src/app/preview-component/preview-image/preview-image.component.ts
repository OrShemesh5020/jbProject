import { GalleryElement } from './../../gallery-component/gallery-component.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrls: ['./preview-image.component.scss'],
})
export class PreviewImageComponent implements OnInit {
  @Input() imageElement: GalleryElement;
  constructor() {}

  ngOnInit(): void {}
}
