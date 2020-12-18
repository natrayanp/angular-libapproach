import { Type, ElementRef } from '@angular/core';

export class DialogItem {
  constructor(public component: Type<any>, public data: any, public targetelement?: ElementRef) {}
}

export interface dialogTemplateComponent {
  data: any;
}