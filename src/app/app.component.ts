import { DummyService } from './service/dummy.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'or ';
  constructor(public dummyService: DummyService){}
}
