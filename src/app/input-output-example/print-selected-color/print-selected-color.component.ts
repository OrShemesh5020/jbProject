import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-print-selected-color',
  templateUrl: './print-selected-color.component.html',
  styleUrls: ['./print-selected-color.component.scss'],
})
export class PrintSelectedColorComponent implements OnInit {
  @Input() color: string;
  constructor() {}

  ngOnInit(): void {}
}
