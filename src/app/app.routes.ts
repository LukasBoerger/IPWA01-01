import {provideRouter, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ImpressumComponent} from './components/impressum/impressum.component';
import {DatenschutzComponent} from './components/datenschutz/datenschutz.component';
import {HauptseiteComponent} from './components/hauptseite/hauptseite.component';
import {bootstrapApplication} from '@angular/platform-browser';

export const routes: Routes = [
  { path: 'impressum', component: ImpressumComponent },
  { path: '', component: HauptseiteComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: '**', redirectTo: '' } // Fallback-Route
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // WICHTIG: Routing hier bereitstellen!
  ]
});
