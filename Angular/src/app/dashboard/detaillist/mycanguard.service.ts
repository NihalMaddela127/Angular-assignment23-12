import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
    sub : any;
    id : number;
    val : boolean;
    constructor(){}
    canActivate(route: ActivatedRouteSnapshot) {
        const id = route.params.id;
        if(id>7){
            return false;
        }
        else{
            return true;    
        } 
    }
}