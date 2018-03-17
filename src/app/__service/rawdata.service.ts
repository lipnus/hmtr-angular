import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RawdataService {

  constructor(private http: HttpClient) { }

  getRawdata(userinfo_pk:number){
    return this.http.post<any>('http://localhost:9000/angular/rawdata',{userinfo_pk:userinfo_pk})
    .map(
      data => { return data }
    );
  }
}
