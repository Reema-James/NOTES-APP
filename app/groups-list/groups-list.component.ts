import { group } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { GroupsComponent } from '../groups/groups.component';
import { Group } from './group';
import { GroupDTO } from './groupDTO';


@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})

export class GroupsListComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  groupList: Group[] = [];
  countSub!: Subscription;
  count!: Number;

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
      height: '40%',
      data: {title: group.title, description: group.description}
     });
    dialogRef.afterClosed().subscribe(result => {
      const currentGroup: GroupDTO={
        id: group.id,
      title: result.value.title,
      description: result.value.description  
      }
      this.api.editGroup(currentGroup).subscribe({
        next: groupList => {
         this.groupList= groupList;
        }
      });
    });
}

dltMethod(group: Group) {

  if(confirm("Are you sure to delete ")) {
    this.api.deleteGroup(group.id).subscribe({
      next: status=>{
        console.log(JSON.stringify(status))
      }
    });
    
    const idx= this.groupList.indexOf(group)
    this.groupList.splice(idx,1)
    return true;
  }
  else{
    return false;
  }
}


  openDialogBox()  
  {
    const dialogRef = this.dialog.open(GroupsComponent, {
      width: '35%',
      height: '40%'
    });

    dialogRef.afterClosed().subscribe(result => {
      const currentGroup={
      title: result.value.title,
      description: result.value.description  
      }
      this.api.postdata(currentGroup).subscribe({
        next: groupList => {
          this.groupList= groupList
        }
      });
    });
   }

}
