import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AlertStyle, AlertType, Msg } from '../models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private unq_id_seq = 0;
  private _notimsgSource = new Subject<Msg>();
  private _alrtmsgSource = new Subject<Msg>();
  private _bannermsgSource = new Subject<Msg>();
  private defaultalertId = 'default-alert';

  onAlert(id = this.defaultalertId): Observable<Msg> {
    return this._alrtmsgSource.asObservable().pipe(filter(x => x && x.id === id));
  }

   // convenience methods for Alert
    alert_success(message: string, options?: any) /*id: string, message: string, canclose: 'yes' | 'no',autoclose:number=0) */
    {
      this.alert(new Msg({ ...options,style: AlertStyle.Success,type:AlertType.Alert,message:message}));
        //this.update(id,message, AlertStyle.Success, AlertType.Alert, canclose,autoclose);        
    }

    alert_error(message: string, options?: any) {
      this.alert(new Msg({ ...options,style: AlertStyle.Error,type:AlertType.Alert,message:message}));
      //this.update(id,message, AlertStyle.Error, AlertType.Alert, canclose,autoclose);        
    }

    alert_info(message: string, options?: any) {
      this.alert(new Msg({ ...options,style: AlertStyle.Info,type:AlertType.Alert,message:message}));
      //this.update(id,message, AlertStyle.Info, AlertType.Alert, canclose,autoclose);        
    }

    alert_warn(message: string, options?: any) {
      this.alert(new Msg({ ...options,style: AlertStyle.Warning,type:AlertType.Alert,message:message}));
      //this.update(id,message, AlertStyle.Warning, AlertType.Alert, canclose,autoclose);        
    }

    // main alert method    
    alert(alert: Msg) {
      alert.id = alert.id || this.defaultalertId;
      this._alrtmsgSource.next(alert);
    }

    // clear alerts
    clear(id = this.defaultalertId) {
        this._alrtmsgSource.next(new Msg({ id }));
    }

  

  get_unq_id () {
    this.unq_id_seq = this.unq_id_seq + 1;
    const unq_id = 'noti' + this.unq_id_seq;
    return unq_id;
  }
}
