import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FavouritesComponent } from '../favourites/favourites.component';
import { GroupsComponent } from '../groups/groups.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  constructor(private dialog : MatDialog) { }

  openDialog() {

    this.dialog.open(FavouritesComponent, {

     width:'65%'

    });

  }
  openDialogBox() {

    this.dialog.open(GroupsComponent, {

     width:'35%'

    });

  }

  ngOnInit(): void {
  }

}