import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blog : any

  constructor() { 
    this.blog = [
      {year : 2017 , month : 2},
      {year : 2017 , month : 3},
      {year : 2017 , month : 4}
    ]
  }

  ngOnInit(): void {
  }

}