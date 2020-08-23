import { person } from './person.model';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.scss'],
})
export class PeopleInfoComponent implements OnInit {
  nameList = new Array();
  infoArr: person[] = [
    {
      id: 0,
      name: 'Carrillo Stewart',
      gender: 'male',
      favoriteFruit: 'melon',
    },
    {
      id: 1,
      name: 'Ramos Wall',
      gender: 'male',
      favoriteFruit: 'strawberry',
    },
    {
      id: 2,
      name: 'Figueroa Sampson',
      gender: 'male',
      favoriteFruit: 'mango',
    },
    {
      id: 3,
      name: 'Marsh Stanley',
      gender: 'male',
      favoriteFruit: 'melon',
    },
    {
      id: 4,
      name: 'Rush Mcmahon',
      gender: 'male',
      favoriteFruit: 'apple',
    },
    {
      id: 5,
      name: 'Downs Meyer',
      gender: 'male',
      favoriteFruit: 'strawberry',
    },
    {
      id: 6,
      name: 'Yesenia Mcgee',
      gender: 'female',
      favoriteFruit: 'mango',
    },
    {
      id: 7,
      name: 'Charlene Jacobs',
      gender: 'female',
      favoriteFruit: 'melon',
    },
  ];

  constructor() {
    // for (let index = 0; index < this.infoArr.length; index++) {
    //   this.infoArr[index] = this.text2[index];
    //   // alert(JSON.stringify(this.people[index]));
    // }
  }

  ngOnInit(): void {}

  addName(name: string): void {
    if (name) {
      this.nameList.push(name);
    }
  }
}
