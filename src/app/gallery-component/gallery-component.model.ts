export class GalleryElement {
  constructor(
    public id?: number,
    public src?: string,
    public title?: string,
    public description?: string,
    public createdOn?: string,
    public type?: GalleryElementType
  ) {}
}

export enum GalleryElementType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  VIDEO_EMBEDED = 'VIDEO_EMBEDED',
}
