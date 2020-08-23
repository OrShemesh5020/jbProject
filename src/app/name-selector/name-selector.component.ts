import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-selector',
  templateUrl: './name-selector.component.html',
  styleUrls: ['./name-selector.component.scss'],
})
export class NameSelectorComponent implements OnInit {
  insertedName: string;
  constructor() {}

  ngOnInit(): void {}
  getName(name: string): void {
    this.insertedName = name;
  }
}
