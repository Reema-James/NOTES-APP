
import {Component, OnInit} from '@angular/core';

export class Quicknotes {  title!: String;  content!: String;  }
@Component({  
selector: 'app-quicknotes',  
templateUrl: './quicknotes.component.html',  
styleUrls: ['./quicknotes.component.css']})

export class QuicknotesComponent implements OnInit {

titleModel: String;  
contentModel: String;  
todoModel: String;  
quicknotes: Quicknotes[];  
constructor() {    
this.titleModel = '';    
this.contentModel = '';    
this.todoModel = '';    
const defaultQuicknotes: Quicknotes = {      
title: 'my note',      
content: 'This is default note',        
};    
this.quicknotes = [defaultQuicknotes];  }  ngOnInit() {  }


 createQuicknotes() {    
const newQuicknotes: Quicknotes = {      
title: this.titleModel,      
content: this.contentModel,    
};    this.quicknotes.push(newQuicknotes);      
this.titleModel = this.todoModel = this.contentModel = '';  
}}
