import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {ImpressumComponent} from './components/impressum/impressum.component';
import {DatenschutzComponent} from './components/datenschutz/datenschutz.component';

export const routes: Routes = [
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: '**', redirectTo: '' } // Fallback-Route
];

