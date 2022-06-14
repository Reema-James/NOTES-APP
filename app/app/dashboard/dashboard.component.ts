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
 
  title: '';
  description: '';

constructor(public dialog : MatDialog)
{
  this.title = '';
  this.description= '';

}

  openDialog() {

    this.dialog.open(FavouritesComponent, {
     width:'35%'
    });
  }


  openDialogBox()  {

    const dialogRef = this.dialog.open(GroupsComponent, {
      width: '35%',
      data: {title: this.title, description: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.title=result.value.title;
      this.description = result.value.description;      
    });


   }}