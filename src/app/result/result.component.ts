import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { StatisticsService } from '../__service/statistics.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(
        private statisticsService:StatisticsService,
        private route:ActivatedRoute,
      ) { }
       ngOnInit() {
        this.getResult(this.route.snapshot.paramMap.get('standard'));
      }
      state_msg="Loading...";
      result:{};
      show=0;
      getResult(standard:string){
        this.statisticsService.getResult(standard)
        .subscribe(
          data => {
            this.result = data;
            this.state_msg = data.msg;
          }
        )
      }
      set(value:number){
        value = Math.round(value*100)/100;
        return value;
      }
      set2(value:number){
        value = Math.round(value*10)/10;
        return value;
  }

}
