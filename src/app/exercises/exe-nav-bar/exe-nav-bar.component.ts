import { LayoutService } from './../../layoutService/layout.service';
import { Component, OnInit } from '@angular/core';
import { Layout, ComponentType } from 'src/app/layoutModel/layout.model';

@Component({
  selector: 'app-exe-nav-bar',
  templateUrl: './exe-nav-bar.component.html',
  styleUrls: ['./exe-nav-bar.component.scss'],
})
export class ExeNavBarComponent implements OnInit {
  exercisesLayoutMenu: Layout[];
  constructor(private layoutService: LayoutService) {
    this.exercisesLayoutMenu = this.layoutService.getByType(
      ComponentType.Exercises
    );
  }

  ngOnInit(): void {}
}
