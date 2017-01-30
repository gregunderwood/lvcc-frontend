import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CalendarEvent } from 'calendar-utils'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventService {

  constructor(private http: Http) { }

  getAll(): Observable<CalendarEvent[]> {
    return this.http.get('http://192.168.99.100:3000/events')
      .map(events => {
        let eventsList = new Array<CalendarEvent>();
        return eventsList;
      });
  }
}
