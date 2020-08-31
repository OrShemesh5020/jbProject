import { URLValidator } from './../../shared/validators/validator';
import { GalleryElement } from './../gallery-component.model';
import { GalleryService } from './../../gallery.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  model: GalleryElement;
  editForm: FormGroup;
  constructor(
    private activated: ActivatedRoute,
    private galleryService: GalleryService,
    private routed: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activated.params.subscribe(
      (params) => (this.model = this.galleryService.getElement(params.id))
    );
    console.log(this.model);
    this.editForm = this.formBuilder.group({
      title: [
        this.model.title,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      description: [
        this.model.description,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(400),
        ],
      ],
      src: [
        this.model.src,
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(400),
          URLValidator.prefix(),
        ],
      ],
    });
  }
  onSubmit(): void {
    // console.log(this.editForm);
    // console.log(this.editForm.value.title);
    this.editModel();
    this.galleryService.updateElement(this.model);
    this.routed.navigate(['gallery/view']);
  }
  editModel(): void {
    this.model.title = this.editForm.value.title;
    this.model.src = this.editForm.value.src;
    this.model.description = this.editForm.value.description;
  }
}
