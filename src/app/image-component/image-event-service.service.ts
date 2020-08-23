import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageEventServiceService {
  events: Subject<string> = new Subject();
  constructor() {}
}
