import { ExtraOptions, PreloadingStrategy, Route, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-booking',
    loadChildren: './flight-booking/flight-booking.module#FlightBookingModule',
    data: {
      preload: false
    }
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@Injectable({
  providedIn: 'root'
})
class MyPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data.preload === true) {
      return fn();
    } else {
      return of(null);
    }
  }
}

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: MyPreloadingStrategy
};
