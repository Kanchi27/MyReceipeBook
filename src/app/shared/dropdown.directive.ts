import { Directive,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }
/*the args in hostbinding refers to the property that has to be modified on which this directive sits on
class - is an array of all the classes
open is the css class that we need to attach dynamically for the dropdown to open and close */

  @HostBinding('class.open') isOpen=false;
  @HostListener('click') toggleOpen(){
    this.isOpen=!this.isOpen;
  }

}
