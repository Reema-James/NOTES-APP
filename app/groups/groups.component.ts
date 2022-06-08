import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
// export class Groups {  title!: String;  description!: String;  }

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  addGroupForm: FormGroup;
  constructor: (private formBuilder, private dialogRef:MatDialogRef


}
  // titleModel: String;  
  // descriptionModel: String;  
  // todoModel: String;  
  // groups: Groups[];  
  // constructor() {    
  // this.titleModel = '';    
  // this.descriptionModel = '';    
  // this.todoModel = '';    
  // const defaultGroups: Groups = {      
  // title: 'Group 1',      
  // description: 'Default group',        
  // };    
  // this.groups = [defaultGroups];  }  ngOnInit() {  }
  
  
  //  createGroups() {    
  // const newGroups: Groups = {      
  // title: this.titleModel,      
  // description: this.descriptionModel,    
  // };    this.groups.push(newGroups);      
  // this.titleModel = this.todoModel = this.descriptionModel = '';  
  // }}
  