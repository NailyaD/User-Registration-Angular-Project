import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appReverse]'
})
export class ReverseDirective implements AfterViewInit {

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    console.log(this.element.nativeElement.innerText.split('').reverse().join(''));
    this.element.nativeElement.innerText.split('').reverse().join('');
  }
}
