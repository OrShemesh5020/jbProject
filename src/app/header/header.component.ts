import { LayoutService } from './../layoutService/layout.service';
import { ImageEventServiceService } from './../image-component/image-event-service.service';
import { Component, OnInit } from '@angular/core';
import { Layout, ComponentType } from '../layoutModel/layout.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerItems: Layout[];
  constructor(private layout: LayoutService) {
    this.headerItems = this.layout.getByType(ComponentType.HEADER);
  }

  ngOnInit(): void {}
}
