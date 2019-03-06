import {Directive,ElementRef,OnInit} from '@angular/core';

@Directive({
   /* selector:'appBasicHighlight'  --element directive*/
   selector:'[appBasicHighlight]'    /*attribute directive*/
})
export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef :ElementRef){}  /*property of this class only*/

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor='green';
        /*not a good way to modify elements this way-- use using rendered instead*/
    }

   
} 