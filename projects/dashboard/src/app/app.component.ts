import { Component, ElementRef } from '@angular/core';
import {AlertService,} from '@natlib/natalert';
import { NatdialogService } from '@natlib/natdialog';
import { TestcompComponent } from './testcomp/testcomp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  id1: string = '';
  id2: string = '';
  id3 = "global-id";
  constructor( private Alertserv: AlertService, private Dialogserv: NatdialogService) {}
  ngOnInit() {
    this.id2 = this.Alertserv.get_unq_id();
    
    console.log(this.id1);    
  }

  startalert() {
    let optionsm = {id :this.id1}
    this.Alertserv.alert_error('Signup successful.  Proceed to login');
  }

  startalert1() {
    let optionsm = {autoclosesec :10 }
    this.Alertserv.alert_info( 'Signup successful.  Proceed to login',optionsm);
  }

  startalert2() {
    this.Alertserv.alert_warn('Signup successful.  Proceed to login');
  }

  startalert3() {
    this.Alertserv.alert_success( 'Signup successful.  Proceed to login');
  }


  startalert4() {
    let optionsm = {id:this.id2 };
    this.Alertserv.alert_error( 'Signup successful.  Proceed to login',optionsm);
  }

  startalert5() {
    let optionsm = {id:this.id2, canclose:'no',autoclosesec :10 };
    this.Alertserv.alert_info('Signup successful.  Proceed to login',optionsm);
  }

  startalert6() {
    let optionsm = {id:this.id2 };
    this.Alertserv.alert_warn('Signup successful.  Proceed to login',optionsm);
  }

  startalert7() {
    let optionsm = {id:this.id3,canclose:'no',autoclosesec :10 };
    this.Alertserv.alert_success('Signup successful.  Proceed to login',optionsm);
  }

  startalert8(elr:any) {
    let optionsm = {component: TestcompComponent, data: 'Bombasto'};
    console.log(elr._elementRef);
    this.Dialogserv.withTarget(elr._elementRef,optionsm);
  }

  chatch(eventsss: any) {
    console.log(eventsss);
  }
  
  
}
