import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent } from 'angular-calendar';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  @Input() event: CalendarEvent;
  title: string = "Edit Event";
  refresh: Subject<any> = new Subject();

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
