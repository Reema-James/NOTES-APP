
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from './groups-list/group';
import { GroupDTO } from './groups-list/groupDTO';
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

  editGroup(group: any){
    return this.http.put<Group[]>("http://localhost:3000/groups:"+group.id, group);
  }

  postNote(data:any, id: String){
    return this.http.post<any>("http://localhost:3000/note:"+id,data);
  }

  deleteNote(note: Note)
  {
    return this.http.delete("http://localhost:3000/notes:"+note.id+"/group:"+note.groupId);
  }

  getGroupName(id: String){
    return this.http.get("http://localhost:3000/group:"+id);
  }
  
  editNote(note: Note){
    return this.http.put("http://localhost:3000/groups:"+note.id, note);
  }


getGroups(): Observable<Group[]> {
  return this.http.get<Group[]>("http://localhost:3000/groups").pipe(  
  );
}

getNotes(id?: String): Observable<Note[]> {
  return this.http.get<Note[]>("http://localhost:3000/notes:"+id).pipe(
  );
}
getNotesCount(id: string){
  return this.http.get<any>("http://localhost:3000/notes-count:"+id)
}

addNoteToFavouriteList(note: Note){
  return this.http.post<Note>("http://localhost:3000/favourites", note)
}

getFavourites(){
  return this.http.get<any>("http://localhost:3000/favourites")
}

}

