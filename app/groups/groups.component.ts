import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import { Group } from '../groups-list/group';
import { group } from '@angular/animations';

export interface DialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html', 
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent {
  addGroupForm: FormGroup;
  display= true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string, description: string}, private formBuilder: FormBuilder,
  private api: ApiService, private dialogRef:MatDialogRef<GroupsComponent>)  
  {
        if(data){
          this.addGroupForm = this.formBuilder.group({
        title: new FormControl(data.title, Validators.required),
        description: new FormControl(data.description)
          })
        }
        else{
          this.addGroupForm = this.formBuilder.group({
            title: new FormControl('', Validators.required),
            description: new FormControl('')
          })
        }
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
