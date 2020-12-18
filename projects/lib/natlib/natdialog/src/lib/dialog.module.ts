import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { DialogDirective } from './dialogdirective/dialog.directive';
import { DialogformComponent } from './dialogcomp/formdialog/dialogform.component';
import { MaterialModule } from './material.module';
import { DisplaydialogComponent } from './dialogcomp/displaydialog/displaydialog.component';
import { TargetdialogComponent } from './dialogcomp/targetdialog/targetdialog.component';


@NgModule({
  declarations: [DialogComponent, DialogDirective, DialogformComponent, DisplaydialogComponent, TargetdialogComponent],
  imports: [MaterialModule
  ],
  exports: [DialogComponent]
})
export class DialogModule { }
