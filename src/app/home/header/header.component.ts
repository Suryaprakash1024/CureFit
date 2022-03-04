import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  msgs1: any;

  constructor() { }

  ngOnInit(): void {
    this.msgs1 = [
      {severity:'info', summary:'Info', detail:'This page is made for educational purpose. Inspired from cult.fit'},
  ];
  }

}
