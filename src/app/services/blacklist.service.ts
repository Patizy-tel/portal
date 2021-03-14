import {Injectable, Inject} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs'
import {ApisService} from './apis.service'
import {Router, ActivatedRoute} from '@angular/router'
import { AlertService } from './alert.service';
import {Page, School}  from '../models'

@Injectable({
  providedIn: 'root'
})
export class BlacklistService {


  constructor(private apis : ApisService, private router : Router ,private alerts:AlertService) {}




  postBlack(x){


   return this.apis.post('/blacklist' ,x);
    
  } ;

delBlack(x){

  return this.apis.delete(`/blacklist/${x}`)
}

  getBlack(filters:any){
    const httpParams = new HttpParams({fromObject: filters});
    return this.apis.get < Page <School  >> (`/blacklist`, httpParams)

 }



 updateUser(user ,id:any){

  return this
  .apis
  .put(`/blacklist/update/${id}`,user);
 }


  indivi(){

    return this.apis.get('/dashboard/individuals')
  }
  buss(){

    return this.apis.get('/dashboard/bus')
  }
  

  ttb(){

    return this.apis.get('/dashboard/totalblacklist')
  }
  

  

}
