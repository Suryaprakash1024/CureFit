import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oldhome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class OldHomeComponent implements OnInit {

  accord1 = true;
  accord2 = false;
  accord3 = false;
  constructor() {
  }

  ngOnInit() {
  }

}
