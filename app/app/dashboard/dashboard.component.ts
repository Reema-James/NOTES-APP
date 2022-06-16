import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FavouritesComponent } from '../favourites/favourites.component';
import { GroupsComponent } from '../groups/groups.component';

export interface DialogData {
  title: string;
  description : string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
 
  title!: String;
  description!: String;

constructor(public dialog : MatDialog){}

  openDialog() 
  {
    this.dialog.open(FavouritesComponent, {
     width:'35%'
    });
  }

 }