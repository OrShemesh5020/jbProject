import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-example',
  templateUrl: './input-output-example.component.html',
  styleUrls: ['./input-output-example.component.scss'],
})
export class InputOutputExampleComponent implements OnInit {
  colorSelected: string;
  constructor() {}

  ngOnInit(): void {}
  onColorSelected(color: string) {
    this.colorSelected = color;
  }
}
