import { ImageEventServiceService } from './../image-component/image-event-service.service';
import { DummyService } from './../service/dummy.service';
import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentChecked,
  AfterViewChecked,
  AfterContentInit,
} from '@angular/core';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DummyService],
})
export class HomeComponent
  implements OnInit, DoCheck, AfterContentInit, AfterContentChecked {
  title = 'book store';
  imgSrc =
    'data:image/jpeg;base64,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';
  name = '';
  images: string[];
  numImages;
  multiplicationTable: number[][] = new Array(10);
  constructor(
    public dummyService: DummyService,
    private imageEventServiceService: ImageEventServiceService
  ) {
    this.dummyService.name = 'HomeComponent';
    for (let row = 0; row < this.multiplicationTable.length; row++) {
      this.multiplicationTable[row] = new Array(10);
      for (let col = 0; col < this.multiplicationTable[row].length; col++) {
        this.multiplicationTable[row][col] = (row + 1) * (col + 1);
      }
    }
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges')
  // }

  ngOnInit(): void {
    this.imageEventServiceService.events.subscribe((value) =>
      console.log('home print: ' + value)
    );
  }

  setNum(inputElement: HTMLInputElement): void {
    this.numImages = inputElement.value;
    this.setArray();
  }
  setArray(): void {
    this.images = new Array(this.numImages);
    for (let i = 1; i < this.numImages; i++) {
      this.images.push('Name' + i);
    }
  }
  changeInput(inputElement: HTMLElement): void {
    this.name = 'new value';
  }
  onImageClick(): void {
    console.log('image was clicked');
  }
  setMultiplicationTable(): void {}
}
