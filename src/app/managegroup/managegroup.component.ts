import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GroupService } from '../__service/group.service';
import { Group } from '../group';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managegroup',
  templateUrl: './managegroup.component.html',
  styleUrls: ['./managegroup.component.css']
})
export class ManagegroupComponent implements OnInit {

  constructor(
    private groupService: GroupService,
    private http: HttpClient,
    private router: Router
  ) { }
  @Output() outEventEmitter: EventEmitter<number> = new EventEmitter<number>();

  groups:Group[];
  getGroupName:string;
  msg:string;
  delete_number:number;
  deleteconfirm:number;
  // goStudents(groupname:string){
  //   this.router.navigate('/student/'+groupname)
  // }
  ngOnInit() {
    this.groupService.getGroups()
    .subscribe(data => {this.groups=data;});
  }
  changeState(group_code:string, state:string){
    this.groupService.changeState(group_code, state)
    .subscribe(
      data => {
        this.msg = data.msg;
        this.groups = data.groups;
      }
    )
  }
  makeGroup(){
    this.groupService.makeGroup(this.getGroupName)
    .subscribe(data => {
      this.msg = data.msg;
      this.groups = data.groups;
    });
  }
  showConfirm(){
    if(confirm("정말 삭제하시겠습니까?\n비어 있는 그룹만 삭제가 가능합니다.")){
      return 1;
    }
    else{
      return 0;
    }
  }
  deleteGroup(group_code:string){
    if(this.deleteconfirm==1){
      this.groupService.deleteGroup(group_code)
      .subscribe(
        data => { 
          this.msg = data.msg; // 불가능할 시 실패했습니다 메시지 출력.
          this.groups = data.groups;
      });
      this.deleteconfirm=0;
    }
  }
}
