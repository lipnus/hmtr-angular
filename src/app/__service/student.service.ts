import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Student } from '../student';
import { ServerAddress } from '../Serveraddress';

@Injectable()
export class StudentService {

  constructor(private http: HttpClient) { }
  URL = ServerAddress + "angular/students"
  getStudents(group_name: string){
    return this.http.post<any>(this.URL, {name:group_name})
      .map(students => {return students});
  }

}
//http://ec2-13-125-164-178.ap-northeast-2.compute.amazonaws.com:9000