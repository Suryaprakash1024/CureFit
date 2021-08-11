import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  accord1 = true;
  accord2 = false;
  accord3 = false;
  constructor() {
  }

  ngOnInit() {
  }

}
