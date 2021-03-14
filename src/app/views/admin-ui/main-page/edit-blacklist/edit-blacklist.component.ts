import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';


@Component({
  selector: 'app-edit-blacklist',
  templateUrl: './edit-blacklist.component.html',
  styleUrls: ['./edit-blacklist.component.scss']
})
export class EditBlacklistComponent implements OnInit {

  @Input()errorMessage : Error;
  public dialog = false;
  @Input()user ;
  @Input()btnState$ : ClrLoadingState;
  @Input()loading : Boolean = false;
  @Output()childSubmit : EventEmitter < any > = new EventEmitter < any > ();
  public vendorForm : FormGroup;

 
    ngOnInit() {
      this.dialog = true
        this.createProjectForm();

        console.log(this.user)
    }

    private createProjectForm() {
        this.vendorForm = new FormGroup({

          name: new FormControl(this.user.name, Validators.required),
          type: new FormControl(this.user.type, Validators.required),
          email: new FormControl(this.user.email, Validators.required),
          institution: new FormControl(this.user.institution, Validators.required),
          manager: new FormControl(this.user.manager, Validators.required),
          date: new FormControl('', Validators.required),
       
            _id:new FormControl(this.user._id)
        });
    }

    onSubmit() {
        this
            .childSubmit
            .emit(this.vendorForm.value);
    }

}
