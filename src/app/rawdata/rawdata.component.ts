import { Component, OnInit, Input } from '@angular/core';
import { Rawdata } from '../rawdata';
import { RawdataService } from '../__service/rawdata.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rawdata',
  templateUrl: './rawdata.component.html',
  styleUrls: ['./rawdata.component.css']
})

export class RawdataComponent implements OnInit {

  ngOnInit() {
    this.getRawdata(this.route.snapshot.paramMap.get('userinfo_pk'));
  }

  
  basicinfo1:Rawdata[];
  basicinfo2:Rawdata[];
  basicinfo3:Rawdata[];
  behavior1:Rawdata[];
  behavior2:Rawdata[];
  behavior3:Rawdata[];
  behavior4:Rawdata[];
  aptitude_uns:Rawdata[];
  aptitude_internet:Rawdata[];
  aptitude_pnc_A:Rawdata[];
  aptitude_pnc_B:Rawdata[];
  aptitude_pnc_C:Rawdata[];
  aptitude_pnc_D:Rawdata[];
  aptitude_pnc_E:Rawdata[];
  aptitude_pnc_F:Rawdata[];
  aptitude_stress_A:Rawdata[];
  aptitude_stress_B:Rawdata[];
  aptitude_stress_C:Rawdata[];
  aptitude_stress_D:Rawdata[];
  aptitude_stress_E:Rawdata[];
  aptitude_stress_F:Rawdata[];
  aptitude_stress_G:Rawdata[];
  aptitude_stress_H:Rawdata[];
  aptitude_support1:Rawdata[];
  aptitude_support2:Rawdata[];
  aptitude_demand1:Rawdata[];
  aptitude_demand2:Rawdata[];
  aptitude_help1:Rawdata[];
  aptitude_help2:Rawdata[];
  aptitude_needs:Rawdata[];
  balance_learning:Rawdata[];
  balance_course:Rawdata[];
  balance_entrance:Rawdata[]; 

  

  constructor(
    private route: ActivatedRoute,
    private rawdataService : RawdataService
  ) {}
  

  getRawdata(userinfo_pk:any): void{
    userinfo_pk *= 1;
    this.rawdataService.getRawdata(userinfo_pk)
    .subscribe(
      data => {
        this.basicinfo1 = data.basicinfo1;
        this.basicinfo2 = data.basicinfo2;
        this.basicinfo3 = data.basicinfo3;
        this.behavior1 = data.behavior1;
        this.behavior2 = data.behavior2;
        this.behavior3 = data.behavior3;
        this.behavior4 = data.behavior4;
        this.aptitude_uns = data.aptitude_uns;
        this.aptitude_internet = data.aptitude_internet;
        this.aptitude_pnc_A = data.aptitude_pnc_A;
        this.aptitude_pnc_B = data.aptitude_pnc_B;
        this.aptitude_pnc_C = data.aptitude_pnc_C;
        this.aptitude_pnc_D = data.aptitude_pnc_D;
        this.aptitude_pnc_E = data.aptitude_pnc_E;
        this.aptitude_pnc_F = data.aptitude_pnc_F;
        this.aptitude_stress_A = data.aptitude_stress_A;
        this.aptitude_stress_B = data.aptitude_stress_B;
        this.aptitude_stress_C = data.aptitude_stress_C;
        this.aptitude_stress_D = data.aptitude_stress_D;
        this.aptitude_stress_E = data.aptitude_stress_E;
        this.aptitude_stress_F = data.aptitude_stress_F;
        this.aptitude_stress_G = data.aptitude_stress_G;
        this.aptitude_stress_H = data.aptitude_stress_H;
        this.aptitude_support1 = data.aptitude_support1;
        this.aptitude_support2 = data.aptitude_support2;
        this.aptitude_demand1 = data.aptitude_demand1;
        this.aptitude_demand2 = data.aptitude_demand2;
        this.aptitude_help1 = data.aptitude_help1;
        this.aptitude_help2 = data.aptitude_help2;
        this.aptitude_needs = data.aptitude_needs;
        this.balance_learning = data.balance_learning;
        this.balance_course = data.balance_course;
        this.balance_entrance = data.balance_entrance;
      }
    );
  }
}
