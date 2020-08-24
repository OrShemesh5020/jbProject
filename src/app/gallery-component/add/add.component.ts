import { GalleryService } from './../../gallery.service';
import {
  GalleryElement,
  GalleryElementType,
} from './../gallery-component.model';
import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddComponent implements OnInit {
  model: GalleryElement = new GalleryElement();
  elementType: string;
  // galleryElementType: GalleryElementType;
  // @Output() add: EventEmitter<GalleryElement> = new EventEmitter();
  constructor(private galleryService: GalleryService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.model.galleryElementType = GalleryElementType[this.elementType];
    // console.log(this.elementType);
    // console.log(this.model.galleryElementType);
    this.galleryService.addElement(this.model);
    this.router.navigate(['gallery/view']);
  }
}
