import { Component, Inject,EventEmitter,Output} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../api.service';

export interface DialogData {
  title: string;
  description : string;
}

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})

export class AddnotesComponent {
  AddnotesForm: FormGroup;
  display= true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string, description: string},
  private formBuilder: FormBuilder, private dialogRef:MatDialogRef<AddnotesComponent>, private api: ApiService)

  {
    this.AddnotesForm=this.formBuilder.group({
      title:new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    })
  }

  addNote(): void
  {
    this.api.postNote(this.AddnotesForm.value).subscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

 ngOnInit() {

   }
}