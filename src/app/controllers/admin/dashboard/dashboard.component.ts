import { Component, OnInit } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { Utilities } from 'src/app/models';
import { AlertService, TodoService } from 'src/app/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit { 
  public total : number;
  public one:number;
  public two:number ;
  public three :number;
  public users : [];
  user: any;
  dialog: boolean;
  constructor(private  todos : TodoService ,private alert:AlertService) { }

  ngOnInit() {

    this.allList({});
 


  }

  submit(x){
    this.todos.addTodo(x).subscribe(resp=>{
      this.alert.success('Added ✔👍');

      this.allList({});
     
    })


  }



  del(x){
    this.todos.delTodo(x._id).subscribe(resp=>{
      this.alert.success('Deleted ✔❌❌');
    
      this.allList({})
    })


  }

  editUser(x) {
    this.user = x;
    this.dialog = true;
}



updateUser(x){

  console.log(x)
    this
        .todos
        .updateTodo(x._id ,x)
        .subscribe((resp : any) => {
          this.allList({});
         
            this
                .alert
                .success(resp.message)

        }, (err) => {

            this
                .alert
                .error(err.error.message)
        })



}



changeStatus(x:any){

  console.log(x)
    this
        .todos
        .changeStatusTodo(x._id ,!x.status)
        .subscribe((resp : any) => {
          this.allList({});
         
            this
                .alert
                .success(resp.message)

        }, (err) => {

            this
                .alert
                .error(err.error.message)
        })



}


  public allList(state:ClrDatagridStateInterface){
    
    this.todos.getAll(Utilities.formatDatagridState(state, state.page
      ? state.page.from / state.page.size
      : 0)).subscribe((resp:any) =>{

        console.log(resp.content)

        this.total = resp.totalElements;
        this.users = resp.content
      })
  }




delAll(){

  this.todos.deleteAll().subscribe(resp=>{


    this.alert.success('Deleted Evrything');
    this.allList({})
  })



}}