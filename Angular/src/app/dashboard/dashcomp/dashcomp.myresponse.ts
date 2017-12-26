import { Directive, ElementRef, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    selector:'[myresponse]'
})

export class MyResponseDirective{
    constructor(private el:ElementRef){}
    
    @Input('myresponse') studentData: any;

    @Output()
    resp: EventEmitter<number> = new EventEmitter<number>();

    @HostListener('click') onclick(){
        this.display();
    }

    display(){
        if(this.studentData){
            alert("You clicked "+this.studentData)
        }
    }

}