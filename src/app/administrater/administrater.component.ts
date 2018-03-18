import { Component, OnInit } from '@angular/core';
import { AdministratorService } from '../__service/administrator.service';

@Component({
  selector: 'app-administrater',
  templateUrl: './administrater.component.html',
  styleUrls: ['./administrater.component.css']
})
export class AdministraterComponent implements OnInit {

  constructor(private administratorService : AdministratorService) { }

  ngOnInit() {
  }
  name:string;
  path:string;
  msg:string;
  upload(){
    this.administratorService.upload(this.name, this.path)
    .subscribe(
      data => {
        this.msg = data.msg;
      }
    )
  }

}
