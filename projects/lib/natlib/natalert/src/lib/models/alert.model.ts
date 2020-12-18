/// Notify users about errors and other helpful stuff
export class Msg {
    id!: string;
    message!: string;
    style!: AlertStyle;
    type!: AlertType;
    canclose: string = 'yes';
    autoclosesec: number = 0;
    keepAfterRouteChange?:boolean = false;
    fade:boolean =false;
    
    constructor(init?:Partial<Msg>) {
        Object.assign(this, init);
    }
  }

export enum AlertStyle {
    Success,
    Error,
    Info,
    Warning
}

export enum AlertType {
    Notification,
    Alert,
    Banner
}

/*
export class Alert {
    id: string;
    type: AlertType;
    content: string;
    canclose: string;
    autoClose: boolean;
    keepAfterRouteChange: boolean;   

    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);
    }
}
*/