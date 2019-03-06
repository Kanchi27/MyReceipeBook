import { Directive,Renderer2,OnInit,ElementRef,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef :ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
    /*this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');*/
    
  }
 @HostListener('mouseenter') mouseover(eventData:Event){
       this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue'); 
    }
 @HostListener('mouseleave') mouseleave(eventData:Event){
       this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent'); 
    }


/*using hostBinding*/
/*@HostBinding('style.backgroundColor') backgroundColor:string='transparent';*/
    /*this arg style.backgroundColor refers-- to which property of the hosting element we need to bind*/
/*@HostListener('mouseenter') mouseover(eventData:Event){
       this.backgroundColor='blue';
    }
 @HostListener('mouseleave') mouseleave(eventData:Event){
       this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent'); 
    }*/
}