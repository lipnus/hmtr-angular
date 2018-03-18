import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ServerAddress } from '../Serveraddress';

@Injectable()
export class RawdataService {

  constructor(private http: HttpClient) { }
  URL = ServerAddress + "angular/rawdata";
  getRawdata(userinfo_pk:number){
    return this.http.post<any>(this.URL, {userinfo_pk:userinfo_pk})
    .map(
      data => { return data }
    );
  }
}
