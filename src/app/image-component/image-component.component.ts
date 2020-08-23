import { ImageEventServiceService } from './image-event-service.service';
import { GalleryElement } from './../gallery-component/gallery-component.model';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.scss'],
})
export class ImageComponentComponent implements OnInit, OnDestroy {
  @Input() imageElement: GalleryElement;
  constructor(private imageEventServiceService: ImageEventServiceService) {}
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnInit(): void {}

  onClick(value: HTMLElement): void {
    this.imageEventServiceService.events.next(value.innerHTML);
  }
  alertMe(div: HTMLElement): void {
    alert(div.innerHTML);
  }
}
