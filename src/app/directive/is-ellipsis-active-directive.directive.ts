import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIsEllipsisActiveDirective]'
})
export class IsEllipsisActiveDirectiveDirective {

  tooltipElement: ElementRef | any;

  constructor(private elementRef: ElementRef) {
    this.tooltipElement = this.elementRef.nativeElement
  }

  // Mouse Enter 
  @HostListener('mouseover') mouseover() {
    if (this.tooltipElement.offsetWidth < this.tooltipElement.scrollWidth) {
      this.tooltipElement.classList.add('set-tooltip');
    };
  };

  // Moouse Leave 
  @HostListener('mouseleave') mouseleave() {
    if (this.tooltipElement.offsetWidth < this.tooltipElement.scrollWidth) {
      this.tooltipElement.classList.remove('set-tooltip');
    };
  };


}
