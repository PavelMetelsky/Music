export class ButtonService {

  public buttonOn = false;

  public turnButtonOn(){
    this.buttonOn = true;
  }

  public turnButtonOff(){
    this.buttonOn = false;
  }

  public switchButton(value:boolean){
    this.buttonOn = value;
  }

}
