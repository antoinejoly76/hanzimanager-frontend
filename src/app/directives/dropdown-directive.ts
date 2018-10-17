import { Directive, Renderer2, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @Input() stateDropdownIsOpen: boolean = false;

  @HostListener('click') mouseclick(eventData: Event) {
    console.log("in the listener");
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    if (!this.stateDropdownIsOpen) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
      console.log(this.elRef.nativeElement)
      this.stateDropdownIsOpen = true;
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
      this.stateDropdownIsOpen = false;
      console.log(this.elRef.nativeElement)
    }

  }
}
