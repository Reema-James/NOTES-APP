import { Component, Inject,EventEmitter,Output} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { MatCard } from '@angular/material/card';
// import { NotesService } from '../services/notes.service';

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
  constructor (private formBuilder: FormBuilder, private dialogRef:MatDialogRef<AddnotesComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    // private notesService: NotesService
    )
  {
    this.AddnotesForm=this.formBuilder.group({
      title:new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

 ngOnInit() {

   }
}

// export class Addnotes { title!: String; content!: String; }
// @Component({
//     selector: 'app-addnotes',
//     templateUrl: './addnotes.component.html',
//     styleUrls: ['./addnotes.component.css']
// })

// export class AddnotesComponent implements OnInit {

//     titleModel: String;
//     contentModel: String;
//     todoModel: String;
//     addnotes: Addnotes[];
//     constructor() {
//         this.titleModel = '';
//         this.contentModel = '';
//         this.todoModel = '';
//         this.addnotes = [];
//     } ngOnInit() { }


//     createAddnotes() {
//         const newAddnotes: Addnotes = {
//             title: this.titleModel,
//             content: this.contentModel,
//         }; this.addnotes.push(newAddnotes);
//         this.titleModel = this.todoModel = this.contentModel = '';
//     }
// }
// export class Groups {  title!: String;  description!: String;  }
