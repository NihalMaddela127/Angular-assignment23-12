import { Injectable } from '@angular/core';  
import { Iphotos } from './servicemodel';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService {
    constructor(private http: HttpClient){
    }
    imageFunction(){
        const url = 'https://jsonplaceholder.typicode.com/photos/';
        return this.http.get<Iphotos[]>(url);
    }
}
