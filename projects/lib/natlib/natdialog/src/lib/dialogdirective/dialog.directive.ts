import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[diaHost]'
})
export class DialogDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}
