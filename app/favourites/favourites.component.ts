import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})

export class FavouritesComponent implements OnInit {

toggle = true;
status = 'Enable';

enableDisableRule() {
   this.toggle = !this.toggle;
   this.status = this.toggle ? '' : '';
}

  constructor(private dialogRef:MatDialogRef<FavouritesComponent>) { }
  ngOnInit(): void {
  }

  public add() {
    console.log("test");
  }

onNoClick(): void {
  this.dialogRef.close();
}
}


