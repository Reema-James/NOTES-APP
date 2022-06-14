import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder, private dialogRef:MatDialogRef<GroupsComponent>,
    )  
  {
    this.addGroupForm=this.formBuilder.group({
      title: new FormControl( '', Validators.required),
      description: new FormControl('', Validators.required)
          })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

//@Inject(MAT_DIALOG_DATA) public data: DialogData