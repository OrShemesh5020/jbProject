import { Layout, ComponentType } from './../layoutModel/layout.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  layoutComponents: Layout[] = [
    {
      id: 0,
      navigation: '/',
      title: 'home',
      type: ComponentType.HEADER,
    },
    {
      id: 1,
      navigation: 'about',
      title: 'about us',
      type: ComponentType.HEADER,
    },
    {
      id: 2,
      navigation: 'gallery/view',
      title: 'Gallery',
      type: ComponentType.HEADER,
    },
    {
      id: 3,
      navigation: 'exercises',
      title: 'exercises',
      type: ComponentType.HEADER,
    },
  ];
  constructor() {}

  getByType(componentName: ComponentType): Layout[] {
    return this.layoutComponents.filter(
      (layoutComponent) => layoutComponent.type === componentName
    );
  }
}
