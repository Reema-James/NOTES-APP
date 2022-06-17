import { group } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { GroupsComponent } from '../groups/groups.component';
import { Group } from './group';


@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})

export class GroupsListComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  groupList: Group[] = [];

  constructor(public dialog : MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.sub= this.api.getGroups().subscribe({
      next: groups=> {
        this.groupList= groups;
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
}

editGrp(group: Group): void{
  
    const dialogRef = this.dialog.open(GroupsComponent, {
      width: '35%',
      data:{title: group.title, description: group.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      const currentGroup: Group={
      id: group.id,
      title: result.value.title,
      description: result.value.description  
      }
      this.api.editGroup(currentGroup).subscribe({
        next: status=>{
          console.log(JSON.stringify(status))
        }
      });
      
      const idx= this.groupList.indexOf(group)
      this.groupList[idx]=currentGroup;  
    });

}

deleteGrp(group: Group): void{
  this.api.deleteGroup(group.id).subscribe({
    next: status=>{
      console.log(JSON.stringify(status))
    }
  });
  
  const idx= this.groupList.indexOf(group)
  this.groupList.splice(idx,1)
}

  openDialogBox()  
  {
    const dialogRef = this.dialog.open(GroupsComponent, {
      width: '35%'
    });

    dialogRef.afterClosed().subscribe(result => {
      const currentGroup={
      id: '',
      title: result.value.title,
      description: result.value.description  
      }
      this.groupList.push(currentGroup);  
    });
   }

}
