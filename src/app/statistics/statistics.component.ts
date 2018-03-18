import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { GroupService } from '../__service/group.service';
import { StatisticsService } from '../__service/statistics.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {

  constructor(
    private groupService:GroupService,
    private statisticsService:StatisticsService,
    private route:ActivatedRoute
  ) { }
  ngOnInit() {
    
  }

  opened_1=0;
  switch_1(){
    this.opened_1=1-this.opened_1;
  }
  opened_2=0;
  switch_2(){
    this.opened_2=1-this.opened_2;
  }
  opened_3=0;
  switch_3(){
    this.opened_3=1-this.opened_3;
  }
  opened_4=0;
  switch_4(){
    this.opened_4=1-this.opened_4;
  }
  groupname:string;
  groups_state = 0;
  grouplist_search:string[]=[];
  grouplist_selected:string[]=[];
  findGroups(){
    if(this.groupname!=''){
      this.groupService.findGroups(this.groupname)
      .subscribe(
        data => { this.grouplist_search = data; }
      )
    }
    else{
      this.grouplist_search = [];
    }
  }
  selectgroup(groupname:string){
    for(var i=0; i<this.grouplist_selected.length; i++){
      if(this.grouplist_selected[i]==groupname){
        break;
      }
    }
    if(i==this.grouplist_selected.length) this.grouplist_selected.push(groupname);
  }
  deletegroup(groupname:string){
    for(let i = 0; i<this.grouplist_selected.length; i++){
      if(this.grouplist_selected[i]==groupname){
        this.grouplist_selected.splice(i,1);
        i--;
      }
    }
  }
  gender_state = 0;
  gender:string='';
  grade_state = [0, 0, 0, 0, 0, 0, 0, 0];
  grade:string[]=[];
  grade_inde(value:string){
    var i;
    for(i = 0; i<this.grade.length; i++){
      if(this.grade[i]==value){
        this.grade.splice(i,1);
        i--;
        break;
      }
    }
    if(i==this.grade.length) this.grade.push(value);
  }
  field_state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  field:string[]=[];
  field_inde(value:string){
    var i;
    for(i = 0; i<this.field.length; i++){
      if(this.field[i]==value){
        this.field.splice(i,1);
        i--;
        break;
      }
    }
    if(i==this.field.length) this.field.push(value);
  }
  interesting_plan_state = [0, 0, 0, 0];
  interesting_plan:string[]=[];
  interesting_plan_inde(value:string){
    var i;
    for(i = 0; i<this.interesting_plan.length; i++){
      if(this.interesting_plan[i]==value){
        this.interesting_plan.splice(i,1);
        i--;
        break;
      }
    }
    if(i==this.interesting_plan.length) this.interesting_plan.push(value);
  }
  attainment_state = 0;
  attainment:string='';
  goal_reason_state = [0, 0, 0, 0, 0];
  goal_reason:string[]=[];
  goal_reason_inde(value:string){
    var i;
    for(i = 0; i<this.goal_reason.length; i++){
      if(this.goal_reason[i]==value){
        this.goal_reason.splice(i,1);
        i--;
        break;
      }
    }
    if(i==this.goal_reason.length) this.goal_reason.push(value);
  }
  best_score_cskd_state = 0;
  best_score_cskd:string='';
  best_type_state = 0;
  best_type:string='';
  pnc_best_state = [0, 0, 0, 0, 0, 0, 0];
  pnc_best:string[]=[];
  pnc_best_inde(value:string){
    var i;
    for(i = 0; i<this.pnc_best.length; i++){
      if(this.pnc_best[i]==value){
        this.pnc_best.splice(i,1);
        i--;
        break;
      }
    }
    if(i==this.pnc_best.length) this.pnc_best.push(value);
  }
  stress_best_state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  stress_best:string[]=[];
  stress_best_inde(value:string){
    var i;
    for(i = 0; i<this.stress_best.length; i++){
      if(this.stress_best[i]==value){
        this.stress_best.splice(i,1);
        i--;
        break;
      }
    }
    if(i==this.stress_best.length) this.stress_best.push(value);
  }
  support_state = 0;
  support:string='';
  demand_state = 0;
  demand:string='';
  activity_helpful_state = 0;
  activity_helpful:string='';
  activity_wish_state = 0;
  activity_wish:string='';
  learning_grade_state = 0;
  learning_grade:number[]=[0,0];
  course_grade_state = 0;
  course_grade:number[]=[0,0];
  entrance_grade_state = 0;
  entrance_grade:number[]=[0,0];
  check_grade_state = 0;
  check_grade:number[]=[0,0];
  process_grade_state = 0;
  process_grade:number[]=[0,0];
  result_grade_state = 0;
  result_grade:number[]=[0,0];
  save_standard:string;
  goResult():any{
    var standard : {
      groups:string[],
      gender:string,
      grade:string[]
      field:string[],
      interesting_plan:string[],
      attainment:string,
      goal_reason:string[],
      best_score_cskd:string,
      best_type:string,
      pnc_best:string[],
      stress_best:string[],
      support:string,
      demand:string,
      activity_helpful:string,
      activity_wish:string,
      learning_grade:number[],
      course_grade:number[],
      entrance_grade:number[],
      check_grade:number[],
      process_grade:number[],
      result_grade:number[]
    } = {
      groups:[],
      gender:'',
      grade:[],
      field:[],
      interesting_plan:[],
      attainment:'',
      goal_reason:[],
      best_score_cskd:'',
      best_type:'',
      pnc_best:[],
      stress_best:[],
      support:'',
      demand:'',
      activity_helpful:'',
      activity_wish:'',
      learning_grade:[],
      course_grade:[],
      entrance_grade:[],
      check_grade:[],
      process_grade:[],
      result_grade:[]
    };
    if(this.groups_state) standard.groups=this.grouplist_selected;
    else standard.groups=[];
    if(this.gender_state) standard.gender=this.gender;
    else standard.gender='';
    if(this.grade_state) standard.grade=this.grade;
    else standard.grade=[];
    if(this.field_state) standard.field=this.field;
    else standard.field=[];
    if(this.interesting_plan_state) standard.interesting_plan=this.interesting_plan;
    else standard.interesting_plan=[];
    if(this.attainment_state) standard.attainment=this.attainment;
    else standard.attainment='';
    if(this.goal_reason_state) standard.goal_reason=this.goal_reason;
    else standard.goal_reason=[];
    if(this.best_score_cskd_state) standard.best_score_cskd=this.best_score_cskd;
    else standard.best_score_cskd='';
    if(this.best_type_state) standard.best_type=this.best_type;
    else standard.best_type='';
    if(this.pnc_best_state) standard.pnc_best=this.pnc_best;
    else standard.pnc_best=[];
    if(this.stress_best_state) standard.stress_best=this.stress_best;
    else standard.stress_best=[];
    if(this.support_state) standard.support=this.support;
    else standard.support='';
    if(this.demand_state) standard.demand=this.demand;
    else standard.demand='';
    if(this.activity_helpful_state) standard.activity_helpful=this.activity_helpful;
    else standard.activity_helpful='';
    if(this.activity_wish_state) standard.activity_wish=this.activity_wish;
    else standard.activity_wish='';
    if(this.learning_grade_state) standard.learning_grade=this.learning_grade;
    else standard.learning_grade=[];
    if(this.course_grade_state) standard.course_grade=this.course_grade;
    else standard.course_grade=[];
    if(this.entrance_grade_state) standard.entrance_grade=this.entrance_grade;
    else standard.entrance_grade=[];
    if(this.check_grade_state) standard.check_grade=this.check_grade;
    else standard.check_grade=[];
    if(this.process_grade_state) standard.process_grade=this.process_grade;
    else standard.process_grade=[];
    if(this.result_grade_state) standard.result_grade=this.result_grade;
    else standard.result_grade=[];
    this.save_standard=JSON.stringify(standard);
  }
}
