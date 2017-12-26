import { Injectable } from '@angular/core';  
import { Iposts } from './postmodel';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {
    constructor(private http: HttpClient){
    }
    postFunction(){
        const url = 'https://jsonplaceholder.typicode.com/posts/';
        return this.http.get<Iposts[]>(url);
    }
}
