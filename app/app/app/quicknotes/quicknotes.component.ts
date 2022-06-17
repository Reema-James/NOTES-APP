import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddnotesComponent } from '../addnotes/addnotes.component';
import { ApiService } from '../api.service';
import { Note } from './notes';


@Component({
  selector: 'app-quicknotes',
  templateUrl: './quicknotes.component.html',
  styleUrls: ['./quicknotes.component.css']
})
export class QuicknotesComponent implements OnInit, OnDestroy {

    sub!: Subscription;
    noteList: Note[] = [];

  constructor(public dialog : MatDialog, private api: ApiService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.sub= this.api.getNotes(id).subscribe({
      next: notes=> {
        this.noteList= notes;
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
}

editNote(note: Note): void{
  
    const dialogRef = this.dialog.open(AddnotesComponent, {
      width: '35%',
      data:{title: note.title, description: note.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      const currentNote: Note={
      id: note.id,
      title: result.value.title,
      description: result.value.description  
      }
      this.api.editNote(currentNote).subscribe({
        next: status=>{
          console.log(JSON.stringify(status))
        }
      });
      
      const idx= this.noteList.indexOf(note)
      this.noteList[idx]=currentNote;  
    });
}

deleteNote(note: Note): void{
    this.api.deleteNote(note.id).subscribe({
      next: status=>{
        console.log(JSON.stringify(status))
      }
    });
    
    const idx= this.noteList.indexOf(note)
    this.noteList.splice(idx,1)
  }

  openDialogBox()  
  {
    const id = this.route.snapshot.paramMap.get('id') || '';
    console.log(id);
    const dialogRef = this.dialog.open(AddnotesComponent, {
      width: '35%'
    });

    dialogRef.afterClosed().subscribe(result => {
      const currentNote={
      id: '',
      title: result.value.title,
      description: result.value.description  
      }
      this.api.postNote(currentNote, id).subscribe();
      this.noteList.push(currentNote);  
    });
   }

}