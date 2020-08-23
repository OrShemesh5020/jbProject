import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-presenter',
  templateUrl: './name-presenter.component.html',
  styleUrls: ['./name-presenter.component.scss'],
})
export class NamePresenterComponent implements OnInit {
  @Input() name: string;
  constructor() {}

  ngOnInit(): void {}
}
