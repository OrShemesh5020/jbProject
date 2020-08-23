export class GalleryElement {
  constructor(
    public id?: number,
    public src?: string,
    public title?: string,
    public description?: string,
    public createdOn?: Date,
    public galleryElementType?: GalleryElementType
  ) {}
}

export enum GalleryElementType {
  IMAGE,
  VIDEO,
  VIDEO_EMBEDED,
}
