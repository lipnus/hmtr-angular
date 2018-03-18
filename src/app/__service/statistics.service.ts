import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ServerAddress } from '../Serveraddress';

  
@Injectable()
export class StatisticsService {

  constructor(private http : HttpClient) { }
  URL = ServerAddress + "angular/statistics";
  getResult(temp_standard:string){
    var standard = JSON.parse(temp_standard);
    console.log(standard);
    return this.http.post<any>(this.URL, {
      groups:standard.groups,
      gender:standard.gender,
      grade:standard.grade,
      field:standard.field,
      interesting_plan:standard.interesting_plan,
      attainment:standard.attainment,
      goal_reason:standard.goal_reason,
      best_score_cskd:standard.best_score_cskd,
      best_type:standard.best_type,
      pnc_best:standard.pnc_best,
      support:standard.support,
      demand:standard.demand,
      activity_helpful:standard.activity_helpful,
      activity_wish:standard.activity_wish,
      learning_grade:standard.learning_grade,
      course_grade:standard.course_grade,
      entrance_grade:standard.entrance_grade,
      check_grade:standard.check_grade,
      process_grade:standard.process_grade,
      result_grade:standard.result_grade
    })
    .map(data => {return data});
  }
}
