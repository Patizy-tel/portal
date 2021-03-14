import { Component, OnInit } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { Utilities } from 'src/app/models';
import { AlertService, BlacklistService } from 'src/app/services';

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
  constructor(private  blacklist : BlacklistService ,private alert:AlertService) { }

  ngOnInit() {

    this.allList({});
    this.stats()


  }

  submit(x){
    this.blacklist.postBlack(x).subscribe(resp=>{
      this.alert.success('Added ✔👍');

      this.allList({});
      this.stats()
    })


  }



  del(x){
    this.blacklist.delBlack(x._id).subscribe(resp=>{
      this.alert.success('Deleted ✔❌❌');
      this.stats();
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
        .blacklist
        .updateUser(x ,x._id)
        .subscribe((resp : any) => {
          this.allList({});
          this.stats()
            this
                .alert
                .success(resp.message)

        }, (err) => {

            this
                .alert
                .error(err.error.message)
        })



}



public async stats (){

  await this.blacklist.buss().subscribe((resp:any)=>{



    this.two = resp.totalElements
  });
  await this.blacklist.indivi().subscribe((resp:any)=>{


    this.three = resp.totalElements


  });
  await this.blacklist.ttb().subscribe((resp:any)=>{



    this.one =resp.totalElements
  });






}

  public allList(state:ClrDatagridStateInterface){
    
    this.blacklist.getBlack(Utilities.formatDatagridState(state, state.page
      ? state.page.from / state.page.size
      : 0)).subscribe((resp:any) =>{

        console.log(resp.content)

        this.total = resp.totalElements;
        this.users = resp.content
      })
  }
}
