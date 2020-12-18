import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alertcomp/alert.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, MaterialModule],
  exports: [AlertComponent]
})
export class AlertModule { }
