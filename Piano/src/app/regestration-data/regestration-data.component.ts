import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-regestration-data',
  templateUrl: './regestration-data.component.html',
  styleUrls: ['./regestration-data.component.scss']
})
export class RegestrationDataComponent implements OnInit {

  @Output() validEvent = new EventEmitter<boolean>(true);
  public form: FormGroup;

  ngOnInit(): void {
    
    this.form = new FormGroup({
      country: new FormControl('', [Validators.required]),
      town: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    })
  }



}
