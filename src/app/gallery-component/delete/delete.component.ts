import { GalleryService } from './../../gallery.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  galleryElementIndex: number;
  constructor(
    private activated: ActivatedRoute,
    private galleryService: GalleryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activated.params.subscribe((params) => {
      this.galleryElementIndex = params.id;
      // console.log('delete component: ' + this.galleryElementIndex);
      this.delete();
    });
  }
  delete(): void {
    this.galleryService.removeElement(this.galleryElementIndex);
    this.router.navigate(['gallery/view']);
  }
}
