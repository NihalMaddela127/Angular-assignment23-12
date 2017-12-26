import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { Iphotos } from './servicemodel';
import { HttpClient } from '@angular/common/http/src/client';


export class MyInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<Iphotos>, next: HttpHandler){
        const newRequest = req.clone({
            headers: req.headers.set(
                'Authorization',
                'admin'
            )
        });
        console.log(newRequest);
        console.log(newRequest.body);
        return next.handle(newRequest).do(
            event => {
                if(event instanceof HttpResponse){
                    if(event.status === 200){
                        console.log("You are Authorized");
                    }
                    else{
                        console.log("You are not Authorized");
                    }
                }
             }
        );
    }
}