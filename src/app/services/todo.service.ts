import {Injectable, Inject} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs'
import {ApisService} from './apis.service'
import {Router, ActivatedRoute} from '@angular/router'
import { AlertService } from './alert.service';
import { Page, School } from '../models';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url;

  constructor(private apis : ApisService, private router : Router ,private alerts:AlertService) {}

  addTodo(todo:any) : Observable < any > {
      return this
          .apis
          .post(`/todo`, todo)
  }
  
  getAll(filters:any){
    const httpParams = new HttpParams({fromObject: filters});
    return this.apis.get < Page <School  >> (`/todo`, httpParams)

 }

getOne(todo:any) : Observable < any > {
  return this
      .apis
      .get(`/todo/${todo}`)
}

updateTodo( id,todo:any) : Observable < any > {
  return this
      .apis
      .patch(`/todo/one/${id}`, todo)
}

delTodo(todo:any) : Observable < any > {
  return this
      .apis
      .delete(`/todo/del/${todo}`)
}

deleteAll() : Observable < any > {
  return this
      .apis
      .delete(`/todo/all`)
}


changeStatusTodo( id,todo:any) : Observable < any > {
  return this
      .apis
      .patch(`/todo/status/${id}/${todo}`)
}
}
