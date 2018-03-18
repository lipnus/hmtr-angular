import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { ServerAddress } from '../Serveraddress';

@Injectable()
export class AdministratorService {

  constructor(private http:HttpClient) { }
  URL = ServerAddress + "angular/administrator"
  upload(name:string, path:string){
    return this.http.post<any>(this.URL, {name:name, path:path})
    .map(data => {return data});
  }
}
