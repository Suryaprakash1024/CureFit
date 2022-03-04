import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oldheader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class OldHeaderComponent implements OnInit {
  msgs1:any;
  constructor() { }

  ngOnInit() {
    this.msgs1 = [
      {severity:'info', summary:'Info', detail:'This page is made for educational purpose. Inspired from cult.fit'},
  ];
  }

}
