import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSpecialItem]'
})
export class SpecialItemDirective implements OnInit {
  @Input() categoryStatus!: boolean;
  specialItem: ElementRef | any;
  constructor(element: ElementRef) {
    this.specialItem = element.nativeElement.style;
  };
  ngOnInit(): void {
    // set special Item Background Color 
    this.categoryStatus === true ? this.specialItem.backgroundColor = 'green' : this.specialItem.backgroundColor = ''
  }

}
