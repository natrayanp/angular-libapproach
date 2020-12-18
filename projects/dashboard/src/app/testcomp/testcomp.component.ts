import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable }  from 'rxjs';
import {AlertService,} from '@natlib/natalert';
import { NatdialogService } from '@natlib/natdialog';

export class Address {
  constructor(
    public firstname?: string,
    public lastname?: string,
    public address?: string,
    public city?: string,
    public state?: string,
    public postalcode?: string
  ) {}
}

  

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.scss']
})
export class TestcompComponent  {
  address = new Address();

  id1: string = '';
  id2: string = '';
  id3 = "global-id";
  constructor( private Alertserv: AlertService, private Dialogserv: NatdialogService) {}
  ngOnInit() {
    this.id2 = this.Alertserv.get_unq_id();
    
    console.log(this.id1);    
  }


  onSubmit() {
    alert('Thanks for submitting! Data: ' + JSON.stringify(this.address));
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
    let optionsm = {id:this.id3 };
    this.Alertserv.alert_success('Signup successful.  Proceed to login',optionsm);
  }


  startalert8() {
    let optionsm = {id:'global-id1' };
    this.Alertserv.alert_success('Signup successful.  Proceed to login',optionsm);
  }

  startalert9() {
    let optionsm = {component: TestcompComponent, data: 'Bombasto'};
    this.Dialogserv.withForm(optionsm);
  }

  chatch(eventsss: any) {
    console.log(eventsss);
  }
  
}
