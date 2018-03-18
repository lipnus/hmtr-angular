import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { StudentService } from '../__service/student.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  displayedColumns = ['name', 'birth', 'email', 'phone'];
  constructor(
    private route: ActivatedRoute,
    private studentservice: StudentService
  ) { }

  students:Student[];
  getstudents:Student[];
  group:string;
  ngOnInit() {
    this.getStudents(this.route.snapshot.paramMap.get('groupname'));
  }  

  getStudents(group): void{
    this.group=group;
    this.studentservice.getStudents(this.group)
    .subscribe(
      data => {
        this.students = data;
      },
      error => { this.students = this.students }
    );
  }
}
