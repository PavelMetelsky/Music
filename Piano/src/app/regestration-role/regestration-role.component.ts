import { Component, OnInit } from '@angular/core';
import {ButtonService} from "../button.service"
import { RegSendService } from '../reg-send.service';

@Component({
  selector: 'app-regestration-role',
  templateUrl: './regestration-role.component.html',
  styleUrls: ['./regestration-role.component.scss']
})
export class RegestrationRoleComponent implements OnInit {

  public isStudent = false;
  public isMentor = false;
  constructor(private btnService: ButtonService, private reg: RegSendService) { }

  ngOnInit(): void {
  }

  studentClick(){
    this.isStudent = true;
    this.isMentor = false;
    this.btnService.turnButtonOn();
    this.reg.role = "Student";
  }

  mentorClick(){
    this.isStudent = false;
    this.isMentor = true;
    this.btnService.turnButtonOn();
    this.reg.role = "Mentor";
  }

}
