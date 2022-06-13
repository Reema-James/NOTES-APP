import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  getData() {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }

  getdata(){
    return this.http.get("http://localhost:3000/getData")
  }

  postdata(data:any){
    return this.http.post<any>("http://localhost:3000/group",data)
  }

getGroups(){
  return this.http.get("http://localhost:3000/groups")
}

getNotes(){
  return this.http.get("http://localhost:3000/notes")
}

}