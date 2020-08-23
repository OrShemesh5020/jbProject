import { PreviewComponentComponent } from './../preview-component/preview-component.component';
import { DummyService } from './../service/dummy.service';
import { GalleryElement, GalleryElementType } from './gallery-component.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery-component',
  templateUrl: './gallery-component.component.html',
  styleUrls: ['./gallery-component.component.scss'],
})
export class GalleryComponentComponent implements OnInit {
  // selectedGalleryElement: GalleryElement;
  // galleryElementIndex: number;
  // galleryElements: GalleryElement[] = [
  //   {
  //     id: 0,
  //     src:
  //       'https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8',
  //     title: 'cute dog #1',
  //     description: 'this is a cute dog',
  //     createdOn: new Date(2020, 7, 10),
  //     galleryElementType: GalleryElementType.IMAGE,
  //   },
  //   {
  //     id: 1,
  //     src:
  //       'https://cdn.shopify.com/s/files/1/2327/5701/articles/Omega-3-For-Dogs_1200x.jpg?v=1561351694',
  //     title: 'cute dog #2',
  //     description: 'this is a very cute dog',
  //     createdOn: new Date(2019, 8, 24),
  //     galleryElementType: GalleryElementType.IMAGE,
  //   },
  //   {
  //     id: 2,
  //     src:
  //       'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=916',
  //     title: 'cute dog #3',
  //     description: 'this is a very very cute dog',
  //     createdOn: new Date(2020, 5, 25),
  //     galleryElementType: GalleryElementType.IMAGE,
  //   },
  //   {
  //     id: 3,
  //     src:
  //       'https://videolinks.com/pub/media/videolinks/video/dji.osmo.action.mp4',
  //     title: 'video #1',
  //     description: 'this is a video',
  //     createdOn: new Date(2018, 6, 20),
  //     galleryElementType: GalleryElementType.VIDEO,
  //   },
  //   {
  //     id: 4,
  //     src: 'https://i.redd.it/vnpkq1rk31811.jpg',
  //     title: 'cute dog #4',
  //     description: 'this is a very very cute dog',
  //     createdOn: new Date(2020, 5, 25),
  //     galleryElementType: GalleryElementType.IMAGE,
  //   },
  //   {
  //     id: 5,
  //     src:
  //       'https://www.humanesociety.org/sites/default/files/styles/2000x850/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=dz_bhvnR',
  //     title: 'cute dog #3',
  //     description: 'this is a very very cute dog',
  //     createdOn: new Date(2020, 5, 25),
  //     galleryElementType: GalleryElementType.IMAGE,
  //   },
  // ];

  // galleryElementType = GalleryElementType;
  // constructor(public dummyService: DummyService) {}

  ngOnInit(): void {}

  // selectedElement(galleryElement: GalleryElement): void {
  //   this.selectedGalleryElement = galleryElement;
  // }
  // closePreview(): void {
  //   this.selectedGalleryElement = null;
  // }
}
