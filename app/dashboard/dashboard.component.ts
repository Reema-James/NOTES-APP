import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tiles = [
    {cols: 4, rows: 1, color: 'lightpink'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
