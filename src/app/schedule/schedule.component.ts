import { Component, OnInit } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../event/event.service';
import { EditEventComponent } from '../event/edit-event.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  events = [];
  view: string = "month";
  viewDate: Date = new Date();

  constructor(private eventService: EventService, private modalService: NgbModal) { }

  ngOnInit() {
    this.eventService.getAll()
      .subscribe(events => {
        this.events = events;
      })
  }

  selectView(view){
    this.view = view;
  }

  open() {
    const modalRef = this.modalService.open(EditEventComponent);
    modalRef.componentInstance.event = {};
  }
}
