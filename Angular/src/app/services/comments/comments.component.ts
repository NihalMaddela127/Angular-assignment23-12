import { Component, OnInit } from '@angular/core';
import { CommentService } from './commentservice.service'
import { Icomments } from './commentsmodel';
import { HttpClient } from '@angular/common/http';
import { PaginationService } from '../pagination.service'

@Component({
  selector: 'app-commentservice',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentComponent implements OnInit {
  start : number;
  limit : number;
  commentList: Icomments[];
  pagination: any = {};
  pagedItems: any[];

  constructor(private _commentService: CommentService, private pagerService: PaginationService) {
    this.start = 0;
    this.limit = 10;
  }
  updateLimit(val){
    this.limit=val;
    this.setPage(1);
  }
  ngOnInit() {
    this._commentService.commentFunction().subscribe((res:Icomments[]) =>{
      this.commentList = res;
      this.setPage(1);
    });
 }
 setPage(page: number) {
  if (page < 1 || page > this.pagination.totalPages) {
      return;
  }
  this.pagination = this.pagerService.getPager(this.commentList.length, page, this.limit);
  this.pagedItems = this.commentList.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }
}
