import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../button.service';


@Component({
  selector: 'app-regestration-main',
  templateUrl: './regestration-main.component.html',
  styleUrls: ['./regestration-main.component.scss']
})
export class RegestrationMainComponent {

  constructor(public btnService: ButtonService) { }

  public page = 0;
  public pagesOpened:Array<boolean> = [true, false, false];


  public acceptForm(isValid: boolean):void{
    if (isValid){
      this.btnService.turnButtonOn();
    }  else{
      this.btnService.turnButtonOff();
    }
    console.log(isValid);
  }

  public nextPage():void{
    this.pagesOpened[this.page] = false;
    this.page++;
    this.pagesOpened[this.page] = true;
    //this.btnService.turnButtonOff();
    
  }
}
