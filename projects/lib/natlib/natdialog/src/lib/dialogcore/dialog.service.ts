import { Injectable, ElementRef } from '@angular/core';
//import { Observable } from 'rxjs';
//import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
//import { OkDialogComponent } from './ok-dialog/ok-dialog.component';
//import { DialogformComponent } from '../dialogform/dialogform.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogItem } from '../dialogmodel/dialog.models';
import { DisplaydialogComponent } from '../dialogcomp/displaydialog/displaydialog.component';
import { TargetdialogComponent } from '../dialogcomp/targetdialog/targetdialog.component';

@Injectable({
  providedIn: 'root'
})
export class NatdialogService {

  constructor(private dialog: MatDialog ) { }

  public withForm(compss?: DialogItem):MatDialogRef<any|any> {  

    if (compss === undefined) {
      let da = {};
      compss = new DialogItem(DisplaydialogComponent,da);
    }


    let dialogRef: MatDialogRef<any>;

    //dialogRef = this.dialog.open(DialogformComponent, {
    dialogRef = this.dialog.open(compss.component, {
      disableClose: true,
      data:compss
    });
    console.log("-----------------");
    console.log(dialogRef.getState());
    console.log("-----------------");
    //dialogRef.updatePosition({top:'0', right:'0'})

    return dialogRef;
  }


  public withTarget(target: ElementRef, compss?: DialogItem):MatDialogRef<any|any> {  
    let dialogRef: MatDialogRef<TargetdialogComponent>;   
    console.log(target);
    dialogRef = this.dialog.open(TargetdialogComponent, {          
        disableClose: true,
        data:{...compss,targetelement:target}        
      });
    return dialogRef;
  }


  /*
  public deletealert(title: string, message: string): Observable<boolean> {

      let dialogRef: MatDialogRef<ConfirmDialogComponent>;

      dialogRef = this.dialog.open(ConfirmDialogComponent, {
        disableClose: true
      });

      dialogRef.componentInstance.title = title;
      dialogRef.componentInstance.message = message;

      return dialogRef.afterClosed();
  }

  public showalert(title: string, message: string): any {

      let dialogRef: MatDialogRef<DisplayDialogComponent>;

      dialogRef = this.dialog.open(DisplayDialogComponent, {
        disableClose: true
      });
      this.title = title;
      this.message = message;
      dialogRef.componentInstance.title = title;
      dialogRef.componentInstance.message = message;

      return dialogRef;
  }

  public update_message(title: string, message: string): any {
      this.title = title;
      this.message = message;
  }


  public okalert(title: string, message: string): Observable<boolean> {

      let dialogRef: MatDialogRef<OkDialogComponent>;

      dialogRef = this.dialog.open(OkDialogComponent, {
        disableClose: true
      });

      dialogRef.componentInstance.title = title;
      dialogRef.componentInstance.message = message;

      return dialogRef.afterClosed();
  }


  public closeall() {
    this.dialog.closeAll();
  }
  */
}