import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CampgroundComponent} from './campground/campground.component';
import { ContactComponent } from './contact/contact.component';
import { FitnessCenterComponent } from './fitness-center/fitness-center.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';


export const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'campground', component: CampgroundComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'fitness-center', component: FitnessCenterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
