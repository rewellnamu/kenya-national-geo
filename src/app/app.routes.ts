import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ParksComponent } from './pages/parks/parks.component';
import { ParkDetailsComponent } from './pages/park-details/park-details.component';
import { WildlifeComponent } from './pages/wildlife/wildlife.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parks', component: ParksComponent },
  { path: 'parks/:id', component: ParkDetailsComponent },
  { path: 'wildlife', component: WildlifeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }  // Redirect unknown routes to home
];
