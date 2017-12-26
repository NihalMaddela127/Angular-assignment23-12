import { Component, OnInit } from '@angular/core';
import { PostService } from './postservice.service'
import { Iposts } from './postmodel';
import { HttpClient } from '@angular/common/http';
import { PaginationService } from '../pagination.service'

@Component({
  selector: 'app-postservice',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  start : number;
  limit : number;
  postList: Iposts[];
  pagination: any = {};
  pagedItems: any[];

  constructor(private _postService: PostService, private pagerService: PaginationService) {
    this.start = 0;
    this.limit = 10;
  }
  updateLimit(val){
    this.limit=val;
    this.setPage(1);
  }
  ngOnInit() {
    this._postService.postFunction().subscribe((res:Iposts[]) =>{
      this.postList = res;
      this.setPage(1);
    });
 }
 setPage(page: number) {
  if (page < 1 || page > this.pagination.totalPages) {
      return;
  }
  this.pagination = this.pagerService.getPager(this.postList.length, page, this.limit);
  this.pagedItems = this.postList.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }
}
