import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GroupsComponent } from '../groups/groups.component';
import { Group } from './group';



@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {

  title!: String;
  description!: String;

  groupList: Group[] = [];

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openDialogBox()  
  {
    const dialogRef = this.dialog.open(GroupsComponent, {
      width: '35%',
      data: {title: this.title, description: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      const currentGroup={
      title: result.value.title,
      description: result.value.description  
      }
      this.groupList.push(currentGroup);  
    });



   }
}
