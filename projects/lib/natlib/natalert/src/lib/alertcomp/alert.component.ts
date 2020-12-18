import { Component, SecurityContext, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeValue} from '@angular/platform-browser';
import { Router, NavigationStart } from '@angular/router';
import { AlertService } from '../alertcore/alert.service';
import { AlertStyle, Msg } from '../models/alert.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nat-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() public id =  'default-alert';
  @Input() fade = false;
  @Input() singleton = true;
  @Input() newOnTop = true;
  @Output() alertemit = new EventEmitter<{}>();
  
    alerts: Msg[] = [];
    alertSubscription: Subscription = new Subscription;
    routeSubscription: Subscription = new Subscription;

  constructor(private router: Router, private alertService: AlertService) { }

  ngOnInit() {
  // subscribe to new alert notifications
  this.alertSubscription = this.alertService.onAlert(this.id)
  .subscribe(alert => {
      // clear alerts when an empty alert is received

      if (!alert.message) {
          // filter out alerts without 'keepAfterRouteChange' flag
          this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);

          // remove 'keepAfterRouteChange' flag on the rest
          this.alerts.forEach(x => delete x.keepAfterRouteChange);
          return;          
      } else if (this.singleton) {
        // Handling for singleton : Only one alert allowed in that placeholder        
        /*
        this.alerts.forEach( (x) => {
          this.removeAlert(x);
        })
        */
        this.alerts = [];
      }

      // add alert to array based on new items on top or bottom
      if(this.newOnTop)  {
        this.alerts.unshift(alert);
      } else {
        this.alerts.push(alert);
      }
          

      // auto close alert if required
      if (alert.autoclosesec > 0) {
          //setTimeout(() => this.removeAlert(alert), 3000);
          let mytimer = setInterval( () => {
            alert.autoclosesec --;
            if(alert.autoclosesec ==0) {
              clearInterval(mytimer);
              this.removeAlert(alert);
            }          
          },1000);

      }
 });

// clear alerts on location change
this.routeSubscription = this.router.events.subscribe(event => {
  if (event instanceof NavigationStart) {
      this.alertService.clear(this.id);
  }
});
 }

 ngOnDestroy() {
  // unsubscribe to avoid memory leaks
  this.alertSubscription.unsubscribe();
  this.routeSubscription.unsubscribe();
}

removeAlert(alert: Msg) {
  // check if already removed to prevent error on auto close
  if (!this.alerts.includes(alert)) return;

  if (this.fade) {
      // fade out alert      
      if(this.alerts.find(x => x === alert)) {
        alert.fade = true;
      }
      
      // remove alert after faded out
      setTimeout(() => {
          this.alerts = this.alerts.filter(x => x !== alert);
      }, 250);
  } else {
      // remove alert
      this.alerts = this.alerts.filter(x => x !== alert);
  }
  this.alertemit.emit({exited:true});
}

cssClass(alert: Msg) {
  if (!alert) return;

  if(alert.id === 'global-id') {
    const classes = ['snotify', 'snotify-rightTop'];
    return classes.join(' ');
  }

  const classes = ['alert', 'alert-dismissable'];
          
  const alertTypeClass = {
      [AlertStyle.Success]: 'alert-success',
      [AlertStyle.Error]: 'alert-error',
      [AlertStyle.Info]: 'alert-info',
      [AlertStyle.Warning]: 'alert-warning'
  }

  classes.push(alertTypeClass[alert.style]);

  if (alert.fade) {
      classes.push('fade');
  }

  
  return classes.join(' ');
}

}