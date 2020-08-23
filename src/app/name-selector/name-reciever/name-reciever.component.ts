import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name-reciever',
  templateUrl: './name-reciever.component.html',
  styleUrls: ['./name-reciever.component.scss'],
})
export class NameRecieverComponent implements OnInit {
  @Output() userName: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  changeName(name: string): void {
    this.userName.emit(name);
  }
}
