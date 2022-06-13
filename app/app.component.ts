import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit{

  title = 'notes-app-project';
  constructor(private service :ApiService){
  }

  ngOnInit() {

      this.getDataFromAPI();

  }

  getDataFromAPI(){

    this.service.getdata().subscribe((response) =>{
      console.log('Response from API is',response)
    }, (error) => {
      console.log('Error is',error)
    })

  }
}