import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class ColorDirective {

  constructor(private element: ElementRef) {
    console.log(element)
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

}
