import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component'
import { ScheduleComponent } from './schedule/schedule.component'

export const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
