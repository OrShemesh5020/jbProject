import { GalleryElement } from './../gallery-component.model';
import { GalleryService } from './../../gallery.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  model: GalleryElement;
  constructor(
    private activated: ActivatedRoute,
    private galleryService: GalleryService,
    private routed: Router
  ) {}

  ngOnInit(): void {
    this.activated.params.subscribe(
      (params) => (this.model = this.galleryService.getElement(params.id))
    );
    // console.log(this.model);
  }
  onSubmit(): void {
    this.routed.navigate(['gallery/view']);
  }
}
