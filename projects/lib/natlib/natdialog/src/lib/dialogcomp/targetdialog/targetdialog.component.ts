import { Component, OnInit, Inject, ElementRef, ViewChild, ComponentFactoryResolver, HostListener  } from '@angular/core';
import { DialogDirective } from '../../dialogdirective/dialog.directive';
import { DialogItem, dialogTemplateComponent } from '../../dialogmodel/dialog.models';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA}  from '@angular/material/dialog';

@Component({
  selector: 'lib-targetdialog',
  templateUrl: './targetdialog.component.html',
  styleUrls: ['./targetdialog.component.scss']
})
export class TargetdialogComponent implements OnInit {
  dial: DialogItem | undefined;
  @ViewChild(DialogDirective, { static: true })
  diaHost!: DialogDirective;
  interval: any;
  private readonly _matDialogRef: MatDialogRef<TargetdialogComponent>;
  private readonly triggerElementRef: ElementRef | undefined;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, 
              @Inject(MAT_DIALOG_DATA) public data: DialogItem,
              _matDialogRef: MatDialogRef<TargetdialogComponent>
              ) {
          
                    this.dial = this.data;
                    this._matDialogRef = _matDialogRef;
                    console.log("Inside comp");
                    console.log(this.dial.targetelement);
                    if (this.dial !== undefined && this.dial.targetelement != undefined) {    
                      this.triggerElementRef = this.dial.targetelement;
                    }                     
                 }

  ngOnInit() : void {    
    this.loadComponent();
    console.log("insid ng nit");
    console.log(this.triggerElementRef);
    if(this.triggerElementRef) {
      this.positionDialog();
    }

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

  @HostListener('window:resize')
  positionDialog(){
    if(!this.triggerElementRef) return;

    console.log("Inside positiondialog");
    const matDialogConfig: MatDialogConfig = new MatDialogConfig();
    console.log(this.triggerElementRef.nativeElement.getBoundingClientRect());
    const rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
    console.log(rect);
    matDialogConfig.position = { left: `${rect.right}px`, top: `${rect.bottom}px` };
    /*matDialogConfig.width = '300px';
    matDialogConfig.height = '400px';
    this._matDialogRef.updateSize(matDialogConfig.width, matDialogConfig.height);*/
    this._matDialogRef.updatePosition(matDialogConfig.position);

  }

  
}
