import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';



@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {


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
          description: new FormControl(this.user.description, Validators.required),
        
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
