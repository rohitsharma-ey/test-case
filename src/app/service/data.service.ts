import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {
  //   dataEmiter = new EventEmitter<string>(); // custom event
  dataEmiter = new Subject<string>();
  raiseDataEmitterEvent(data: string) {
    // created this method to use cutsom event
    //  this.dataEmiter.emit(data); // this event emit the the data which we are receving as argument
    this.dataEmiter.next(data);
  }
}
