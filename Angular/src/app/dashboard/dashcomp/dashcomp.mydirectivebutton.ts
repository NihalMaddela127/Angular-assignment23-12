import { Directive, ElementRef, Input, HostListener, Renderer} from '@angular/core';

@Directive({
    selector:'[mybutton]'
})

export class MyButtonDirective{
    constructor(private el:ElementRef,private renderer: Renderer){}
    
    @Input('mybutton') percent: any;

    @HostListener('click') onclick(){
        this.checkPercent();
    }
    
    checkPercent(){
        if(this.percent > .80 && this.percent){
            this.changeColor('green');
        }
        else{
            this.changeColor('blue');
        }
    }

    changeColor(color: string){
        this.renderer.setElementStyle(this.el.nativeElement, 'background', color);
    }

}