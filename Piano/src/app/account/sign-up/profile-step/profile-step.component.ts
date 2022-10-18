import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NavigateService } from 'src/app/shared/base/navigate.service';
import { TicketService } from '../ticketservice';

@Component({
  selector: 'p-profile-step',
  templateUrl: './profile-step.component.html',
  styleUrls: ['./profile-step.component.scss'],
})
export class ProfileStepComponent implements OnInit {
  public paymentInformation: any;
  productForm: FormGroup;

  constructor(
    public ticketService: TicketService,
    private fb: FormBuilder,
    private navigate: NavigateService
  ) {
    this.productForm = this.fb.group({
      quantities: this.fb.array([]),
    });
  }

  public ngOnInit(): void {
    this.paymentInformation =
      this.ticketService.ticketInformation.paymentInformation;
  }

  quantities(): FormArray {
    return this.productForm.get('quantities') as FormArray;
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      link: '',
    });
  }

  addQuantity() {
    //this.quantities().push({ link: new FormControl('') });
    this.quantities().push(this.newQuantity());
  }

  removeQuantity(i: number) {
    this.quantities().removeAt(i);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

  public nextPage(): void {
    console.log(this.productForm.value);
    this.ticketService.ticketInformation.paymentInformation =
      this.paymentInformation;
    this.navigate.toSignupConfirmation();
  }

  public prevPage(): void {
    this.navigate.toSignupPhone();
  }
}
