import { Directive, HostBinding, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[ngModel]',
})

// Here we use [ngModel] that means we are looking for an element which is having ngModel directive on it.
export class HighlightDirective {
  classCheck = false;
  constructor(public control: NgModel) {
    console.log(control);
  }

  @HostBinding('class')
  get addClass() {
    return this.classCheck ? 'addColor-green addBg-light alignText' : null;
  }

  @HostBinding('style')
  get addStyle() {
    return this.classCheck ? { 'border-radius': '10px' } : null;
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.classCheck = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.classCheck = false;
  }
}
