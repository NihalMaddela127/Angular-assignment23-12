import { Injectable } from '@angular/core';  
import { Icomments } from './commentsmodel';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentService {
    constructor(private http: HttpClient){
    }
    commentFunction(){
        const url = 'https://jsonplaceholder.typicode.com/comments/';
        return this.http.get<Icomments[]>(url);
    }
}
