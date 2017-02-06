import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EventService } from './event/event.service';
import { FitnessCenterComponent } from './fitness-center/fitness-center.component';
import { CampgroundComponent } from './campground/campground.component';
import { EditEventComponent } from './event/edit-event.component';
import { DateTimePickerComponent } from './utils/date-time-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ScheduleComponent,
    FitnessCenterComponent,
    CampgroundComponent,
    EditEventComponent,
    DateTimePickerComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot(),
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ EventService ],
  entryComponents: [ EditEventComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
