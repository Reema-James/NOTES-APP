import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddnotesComponent } from '../addnotes/addnotes.component';
export interface DialogData {
    title: string;
    description: string;
}
@Component({
    selector: 'app-quicknotes',
    templateUrl: './quicknotes.component.html',
    styleUrls: ['./quicknotes.component.css']
})
export class QuicknotesComponent {
    title: string;
    description: string;
    constructor(private dialog: MatDialog) {
        this.title='';
        this.description='';
    }

    
    openDialogBox() {
            const dialogRef = this.dialog.open(AddnotesComponent, {       
              width: '35%',
              data: {title: this.title, description: this.description},        
            });        
            dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
                    
             this.title=result.value.title;
            this.description = result.value.description;      
        });
    }
}




// import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
// import { AddnotesComponent } from '../addnotes/addnotes.component';
// import { NotesService } from '../services/notes.service';

// export interface DialogData {
//     title: string;
//     description: string;
// }

// @Component({
//     selector: 'app-quicknotes',
//     templateUrl: './quicknotes.component.html',
//     styleUrls: ['./quicknotes.component.css']
// })

// export class QuicknotesComponent {

//     // private notevar =;

    
//         //  console.log('notes',this.addnotes.AddnotesForm)
    

//     title: string;
//     description: string;

//     constructor(private dialog: MatDialog, private notesService: NotesService) {
//         this.title = '';
//         this.description = '';
//     }
//     // openDialogBox() {
//     //     const dialogRef = this.dialog.open(AddnotesComponent, {
//     //         width: '35%',
//     //         data: { title: this.title, description: this.description },
//     //     });
//     //     dialogRef.afterClosed().subscribe(data => {
//     //         console.log("result",data);
//     //         console.log('The dialog was closed');
//     //         this.title = data.title;
//     //         this.description = data.description;
//     //     });
//     // }
//     openDialogBox() {
//         const dialogRef = this.dialog.open(AddnotesComponent, {
//             width: '35%',
//             data: { title: this.title, description: this.description },
//         });
//     }