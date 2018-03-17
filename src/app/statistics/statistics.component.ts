import { Component, OnInit } from '@angular/core';
import { GroupService } from '../__service/group.service';
import { StatisticsService } from '../__service/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {

  constructor(
    private groupService:GroupService,
    private statisticsService:StatisticsService
  ) { }
  ngOnInit() {
    
  }
  standard : {
    groups:string[],
    gender:string,
    grade:string[]
  };

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
  grouplist_search:string[]=[];
  grouplist_selected:string[]=[];
  findGroups(){
    this.groupService.findGroups(this.groupname)
    .subscribe(
      data => { this.grouplist_search = data; }
    )
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
  groups_state = 0;
  gender_state = 0;
  grade_state = [0, 0, 0, 0, 0, 0, 0, 0];
  gender:string='';
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
  result:any;
  getResult(){
    if(this.groups_state) this.standard.groups=this.grouplist_selected;
    if(this.gender_state) this.standard.gender=this.gender;
    if(this.grade_state) this.standard.grade=this.grade;
    this.statisticsService.getResult(this.standard)
    .subscribe(data => {
      this.result=data;
    })
  }

}
