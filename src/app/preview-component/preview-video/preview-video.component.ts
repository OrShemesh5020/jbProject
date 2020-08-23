import { GalleryElement } from './../../gallery-component/gallery-component.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-video',
  templateUrl: './preview-video.component.html',
  styleUrls: ['./preview-video.component.scss'],
})
export class PreviewVideoComponent implements OnInit {
  @Input() videoElement: GalleryElement;
  constructor() {}

  ngOnInit(): void {}
}
