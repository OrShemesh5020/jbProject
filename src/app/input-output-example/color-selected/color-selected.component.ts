import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-selected',
  templateUrl: './color-selected.component.html',
  styleUrls: ['./color-selected.component.scss'],
})
export class ColorSelectedComponent implements OnInit {
  @Output() colorSelected: EventEmitter<string> = new EventEmitter();
  colors: string[] = ['red', 'blue', 'green'];
  constructor() {}

  ngOnInit(): void {}

  onColorSelected(color: string) {
    this.colorSelected.emit(color);
  }
}
