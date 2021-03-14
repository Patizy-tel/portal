import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {



    @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>();
    @Output()enable = new EventEmitter();
    @Output()edit = new EventEmitter ();
    @Output()del = new EventEmitter ();

    @Input() total :number
    @Input()users ;
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }




