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
    {
      id: 4,
      navigation: 'view',
      title: 'view',
      type: ComponentType.GALLERY,
    },
    {
      id: 5,
      navigation: 'add',
      title: 'add',
      type: ComponentType.GALLERY,
    },
    {
      id: 6,
      navigation: 'edit/2',
      title: 'edit',
      type: ComponentType.GALLERY,
    },
    {
      id: 7,
      navigation: 'delete/1',
      title: 'delete',
      type: ComponentType.GALLERY,
    },
    {
      id: 8,
      navigation: 'exercise-1',
      title: 'exercise 1',
      type: ComponentType.Exercises,
    },
    {
      id: 9,
      navigation: 'exercise-2',
      title: 'exercise 2',
      type: ComponentType.Exercises,
    },
    {
      id: 10,
      navigation: 'exercise-3',
      title: 'exercise 3',
      type: ComponentType.Exercises,
    },
    {
      id: 11,
      navigation: 'exercise-4',
      title: 'exercise 4',
      type: ComponentType.Exercises,
    },
  ];
  constructor() {}

  getByType(componentName: ComponentType): Layout[] {
    return this.layoutComponents.filter(
      (layoutComponent) => layoutComponent.type === componentName
    );
  }
}
