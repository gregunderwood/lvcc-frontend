import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  viewDate: Date = new Date();
  events = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getAll()
      .subscribe(events => {
        debugger;
      })
  }

}
