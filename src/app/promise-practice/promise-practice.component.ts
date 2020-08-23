import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-practice',
  templateUrl: './promise-practice.component.html',
  styleUrls: ['./promise-practice.component.scss'],
})
export class PromisePracticeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // getNum(num: number): Promise<string> {
  //   return new Promise<string>((resolve, reject)=>
  // if(num>10){
  //    resolve(num+" is bigger than 10");
  //    }
  //     else
  //     {reject(num+" is smaller than 10");
  //   }
  // }
}
