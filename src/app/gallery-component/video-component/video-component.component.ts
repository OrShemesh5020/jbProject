import { Component, OnInit, Input } from '@angular/core';
import { GalleryElement } from '../gallery-component.model';

@Component({
  selector: 'app-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.scss'],
})
export class VideoComponentComponent implements OnInit {
  @Input() videoElement: GalleryElement;
  constructor() {}

  ngOnInit(): void {}
}
