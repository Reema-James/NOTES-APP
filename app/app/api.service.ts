
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from './groups-list/group';
import { Note } from './quicknotes/notes';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  getData() {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }


  postdata(data:any){
    return this.http.post<any>("http://localhost:3000/group",data);
  }
  
  deleteGroup(id: String)
  {
    return this.http.delete("http://localhost:3000/groups:"+id);
  }

  editGroup(group: Group){
    return this.http.put("http://localhost:3000/groups:"+group.id, group);
  }

  postNote(data:any){
    return this.http.post<any>("http://localhost:3000/note",data);
  }

  deleteNote(id: String)
  {
    return this.http.delete("http://localhost:3000/notes:"+id)
  }


  editNote(note: Note){
    return this.http.put("http://localhost:3000/groups:"+note.id, note);
  }


getGroups(): Observable<Group[]> {
  return this.http.get<Group[]>("http://localhost:3000/groups").pipe(  
  );
}

getNotes(): Observable<Note[]> {
  return this.http.get<Note[]>("http://localhost:3000/notes").pipe(
  );
}

getFavourites(){
  return this.http.get<any>("http://localhost:3000/favourites")

}
}

// getAll(){
//   return this.groups;
// }

// get(id:number){
//   return this.groups[id];
// }

// getId(grp:Group){
//   return this.groups.indexOf(grp);
// }

// add(grp:Group){
//   let newLength= this.getGroups.push(grp);
//   let index=newLength-1;
//   return index;
// }

// update(id:number, title:string, description:string){
//   let grp= this.groups[id];
//   grp.title= title;
//   grp.description=description;
// }

// delete(id:number){
//   this.getGroups.splice(id,1);
// }
