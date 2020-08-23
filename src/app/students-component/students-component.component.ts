import { Student } from './students.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-component',
  templateUrl: './students-component.component.html',
  styleUrls: ['./students-component.component.scss'],
})
export class StudentsComponentComponent implements OnInit {
  id: number;
  name: string;
  age: number;
  email: string;
  phone: string;
  address: string;
  avgGrades: number;
  studentsListFilter: Student[];
  avgFilteredStudentGrades = 0;
  studentsList: Student[] = [
    {
      id: 0,
      name: 'Gamble Foster',
      age: 27,
      email: 'gamblefoster@moreganic.com',
      phone: '+1 (804) 469-2701',
      address: '662 Gerry Street, Torboy, West Virginia, 6142',
      avgGrades: 74,
    },
    {
      id: 1,
      name: 'Dona Todd',
      age: 38,
      email: 'donatodd@moreganic.com',
      phone: '+1 (878) 412-2366',
      address: '339 Montrose Avenue, Wyano, Pennsylvania, 6854',
      avgGrades: 90,
    },
    {
      id: 2,
      name: 'Welch Cooke',
      age: 32,
      email: 'welchcooke@moreganic.com',
      phone: '+1 (812) 574-2702',
      address: '568 Evergreen Avenue, Yardville, Minnesota, 2420',
      avgGrades: 96,
    },
    {
      id: 3,
      name: 'Hickman Petersen',
      age: 33,
      email: 'hickmanpetersen@moreganic.com',
      phone: '+1 (933) 422-3102',
      address: '854 Preston Court, Lutsen, Washington, 5807',
      avgGrades: 91,
    },
    {
      id: 4,
      name: 'Lilly Ochoa',
      age: 22,
      email: 'lillyochoa@moreganic.com',
      phone: '+1 (861) 479-2248',
      address: '443 Greene Avenue, Idamay, Virgin Islands, 6364',
      avgGrades: 93,
    },
    {
      id: 5,
      name: 'Campbell Calhoun',
      age: 26,
      email: 'campbellcalhoun@moreganic.com',
      phone: '+1 (875) 419-3783',
      address: '578 Aitken Place, Valle, Oregon, 8222',
      avgGrades: 89,
    },
    {
      id: 6,
      name: 'Ethel Patrick',
      age: 26,
      email: 'ethelpatrick@moreganic.com',
      phone: '+1 (924) 466-3077',
      address: '794 Banker Street, Brandermill, Texas, 9029',
      avgGrades: 100,
    },
    {
      id: 7,
      name: 'Benjamin House',
      age: 23,
      email: 'benjaminhouse@moreganic.com',
      phone: '+1 (837) 584-2164',
      address: '372 Heath Place, Bladensburg, Colorado, 5430',
      avgGrades: 71,
    },
    {
      id: 8,
      name: 'Acosta Bridges',
      age: 36,
      email: 'acostabridges@moreganic.com',
      phone: '+1 (891) 462-3863',
      address: '357 Calder Place, Lacomb, Arkansas, 3942',
      avgGrades: 90,
    },
    {
      id: 9,
      name: 'French Cote',
      age: 33,
      email: 'frenchcote@moreganic.com',
      phone: '+1 (954) 551-2675',
      address: '906 Reed Street, Ernstville, Connecticut, 3935',
      avgGrades: 74,
    },
    {
      id: 10,
      name: 'Cruz May',
      age: 20,
      email: 'cruzmay@moreganic.com',
      phone: '+1 (971) 493-3391',
      address: '191 Court Street, Onton, Alaska, 1689',
      avgGrades: 97,
    },
    {
      id: 11,
      name: 'Barton Bruce',
      age: 25,
      email: 'bartonbruce@moreganic.com',
      phone: '+1 (947) 452-2091',
      address: '575 Dictum Court, Cresaptown, District Of Columbia, 3362',
      avgGrades: 85,
    },
    {
      id: 12,
      name: 'Bernice Brady',
      age: 33,
      email: 'bernicebrady@moreganic.com',
      phone: '+1 (919) 513-2260',
      address: '417 Chauncey Street, Babb, New Hampshire, 7991',
      avgGrades: 77,
    },
    {
      id: 13,
      name: 'Hartman Pollard',
      email: 'hartmanpollard@moreganic.com',
      age: 26,
      phone: '+1 (851) 462-2401',
      address: '126 Hill Street, Cetronia, Hawaii, 261',
      avgGrades: 82,
    },
    {
      id: 14,
      name: 'Queen Watkins',
      age: 23,
      email: 'queenwatkins@moreganic.com',
      phone: '+1 (937) 548-3674',
      address: '344 Vermont Court, Garberville, Delaware, 516',
      avgGrades: 87,
    },
    {
      id: 15,
      name: 'Ofek Shemesh',
      age: 16,
      email: 'ofekshemesh25@gmail.com',
      phone: '+(972) 53-272-8575',
      address: 'Buganim Aharon 2, 36, Ramla, Israel',
      avgGrades: 99,
    },
    {
      id: 16,
      name: 'Or Shemesh',
      age: 22,
      email: 'ofekshemesh25@gmail.com',
      phone: '+(972) 53-272-8575',
      address: 'Buganim Aharon 2, 36, Ramla, Israel',
      avgGrades: 99,
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.studentsListFilter = this.studentsList;
    this.setTotalAvg();
    this.id = this.studentsList.length;
    console.log(this.id);
  }

  filter(filterElement: HTMLSelectElement): void {
    const selectedFilter =
      filterElement.options[filterElement.selectedIndex].value;
    switch (selectedFilter) {
      case 'all':
        this.studentsListFilter = this.studentsList;
        break;
      case 'id_1-6':
        this.studentsListFilter = this.studentsList.filter(
          (student) => student.id >= 1 && student.id <= 6
        );
        break;
      case 'age_>_30':
        this.studentsListFilter = this.studentsList.filter(
          (student) => student.age > 30
        );
        break;
      case 'avgGrades_>_90':
        this.studentsListFilter = this.studentsList.filter(
          (student) => student.avgGrades > 90
        );
        break;
      case 'avgGrades_>_95':
        this.studentsListFilter = this.studentsList.filter(
          (student) => student.avgGrades > 95
        );
        break;
      case 'phone_ends_with_4':
        this.studentsListFilter = this.studentsList.filter(
          (student) => student.phone.charAt(student.phone.length - 1) === '4'
        );
        break;
      case 'name_start_with_B':
        this.studentsListFilter = this.studentsList.filter(
          (student) => student.name.charAt(0) === 'B'
        );
        break;
      case 'last_name_start_with_S':
        this.studentsListFilter = this.studentsList.filter(
          (student) => student.name.split(' ')[1].charAt(0) === 'S'
        );
        break;

      default:
        this.studentsListFilter = this.studentsList;
        break;
    }
    this.setTotalAvg();
  }
  setTotalAvg(): void {
    let sum = 0;
    for (let index = 0; index < this.studentsListFilter.length; index++) {
      const student = this.studentsListFilter[index];
      sum += student.avgGrades;
    }
    this.avgFilteredStudentGrades = sum / this.studentsListFilter.length;
  }
  addStudent(): void {
    const newStudent = new Student(
      this.id,
      this.name,
      this.age,
      this.email,
      this.phone,
      this.address,
      this.avgGrades
    );
    this.studentsList.push(newStudent);
    this.setTotalAvg();
  }
}
