import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from '../group';

@Injectable()
export class GroupService {

  constructor(
    private http: HttpClient
  ) { }
  group:Group[];
  getGroups(){
    return this.http.post<any>('http://localhost:9000/angular/group', {order:'select', name:'', group_code:0, state:''})
    .map(groups => { return groups });
  }
  
  makeGroup(groupname:string){
    return this.http.post<any>('http://localhost:9000/angular/group',{order:'make', name:groupname, group_code:0, state:''})
    .map(
      data => { return data; }
    );
  }
  deleteGroup(group_code:string){
    return this.http.post<any>('http://localhost:9000/angular/group', {order:'delete', name:'', group_code:group_code, state:''})
    .map(
      data => { return data; }
    );
  }
  changeState(group_code:string, state:string){
    return this.http.post<any>('http://localhost:9000/angular/group',{order:'changeState', name:'', group_code:group_code, state:state})
    .map(
      data => { return data; }
    )
  }
  findGroups(group_name:string){
    return this.http.post<any>('http://localhost:9000/angular/group',{order:'find', name:group_name, group_code:0, state:''})
    .map(
      data => { return data; }
    )
  }

}
