import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../api.service';

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
        this.addGroupForm = this.formBuilder.group({
        title: new FormControl('', Validators.required),
        description: new FormControl('')
          })
  }


  addGrp(): void
  {
    this.api.postdata(this.addGroupForm.value).subscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

//@Inject(MAT_DIALOG_DATA) public data: DialogData