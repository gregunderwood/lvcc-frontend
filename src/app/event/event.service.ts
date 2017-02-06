import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CalendarEvent } from 'angular-calendar';
import { Observable } from 'rxjs/Observable';

import { colors } from '../utils/colors';

@Injectable()
export class EventService {

  constructor(private http: Http) { }

  getAll(): Observable<Array<CalendarEvent>> {
    return this.http.get('http://192.168.99.100:3000/events')
      .map(res => {
        return JSON.parse(res['_body']).map(e => {
          let event = {
            id: e['id'],
            title: e['title'],
            start: new Date(e['start']),
            allDay: e['all_day'],
            description: e['description'],
            color: colors.blue
          }
          if (e['end']) {
            event['end'] = new Date(e['end']);
          }
          return event;
        });
      });
  }
}
