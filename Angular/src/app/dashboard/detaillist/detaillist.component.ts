import { Component, OnInit } from '@angular/core';
import {  trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { AuthGuardService } from './mycanguard.service';
import { appService } from '../dashcomp/studentdatabase.service';

@Component({
  selector: 'app-detaillist',
  templateUrl: './detaillist.component.html',
  
  providers: [appService],
  animations: [
    trigger('movePanel',[
      transition('void => *',[
        style({transform: 'translateY(-100%)'}),
        animate(100)
      ])
    ])
  ]
})
export class DetaillistComponent implements OnInit {
  studentid : any;
  sub : any;
  student: any;
  constructor(private route: ActivatedRoute, private _databaseservice :appService ) { }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      this.studentid = +params['id'];
      this.student=this._databaseservice.getstudents().find(a => a.id==this.studentid);
   })
  }
}
