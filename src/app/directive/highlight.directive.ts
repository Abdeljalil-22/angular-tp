import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(el :ElementRef,renderer :Renderer2) {
    renderer.setStyle(el.nativeElement,"color","red")
   }
// @HostListener(m) 
}
