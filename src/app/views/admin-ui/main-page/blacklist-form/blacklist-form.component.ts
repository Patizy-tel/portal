import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ClrLoadingState} from '@clr/angular';

@Component({
  selector: 'app-blacklist-form',
  templateUrl: './blacklist-form.component.html',
  styleUrls: ['./blacklist-form.component.scss']
})
export class BlacklistFormComponent implements OnInit {

  @Input()errorMessage : Error;
  @Input()dialog : Boolean = false
  @Input()btnState$ : ClrLoadingState;
  @Input()loading : Boolean = false;
  @Output()childSubmit : EventEmitter < any > = new EventEmitter < any > ();
  public vendorForm : FormGroup;
  @Input() one :number
  @Input() two :number
  @Input() three :number
  constructor() {}

  ngOnInit() {
      this.createProjectForm();
  }

  private createProjectForm() {
      this.vendorForm = new FormGroup({
          name: new FormControl('', Validators.required),
          type: new FormControl('', Validators.required),
          email: new FormControl('', Validators.required),
          institution: new FormControl('', Validators.required),
          manager: new FormControl('', Validators.required),
          date: new FormControl('', Validators.required),
       
      });
  }

  onSubmit() {
      this
          .childSubmit
          .emit(this.vendorForm.value);
  }

}
