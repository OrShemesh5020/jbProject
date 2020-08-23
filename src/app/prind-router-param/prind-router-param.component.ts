import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prind-router-param',
  templateUrl: './prind-router-param.component.html',
  styleUrls: ['./prind-router-param.component.scss'],
})
export class PrindRouterParamComponent implements OnInit {
  name: string;
  constructor(private activated: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activated.params.subscribe((params) => {
      this.name = params.name;
    });
  }

  onClick() {
    this.router.navigate(['/']);
  }
}
