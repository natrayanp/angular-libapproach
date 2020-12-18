import { Component, OnInit, Inject, Input, ViewChild, ComponentFactoryResolver, OnDestroy  } from '@angular/core';
import { DialogDirective } from '../../dialogdirective/dialog.directive';
import { DialogItem, dialogTemplateComponent } from '../../dialogmodel/dialog.models';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA}  from '@angular/material/dialog';
 
@Component({
  selector: 'lib-dialogform',
  templateUrl: './dialogform.component.html',
  styleUrls: ['./dialogform.component.scss']
})
export class DialogformComponent implements OnInit {
  dial: DialogItem | undefined;
  @ViewChild(DialogDirective, { static: true })
  diaHost!: DialogDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, @Inject(MAT_DIALOG_DATA) public data: DialogItem) {
    this.dial = this.data;
  }

  ngOnInit() : void {
    this.loadComponent();    
  }


  loadComponent() {
    if(this.dial!=undefined) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        this.dial.component
      );
      const viewContainerRef = this.diaHost.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent<dialogTemplateComponent>(
        componentFactory
      );
      componentRef.instance.data = this.dial.data;
  
    }  

  }

  
}
