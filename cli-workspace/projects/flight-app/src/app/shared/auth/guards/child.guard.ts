import { ActivatedRouteSnapshot, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoggerService } from 'logger-lib';

@Injectable({
  providedIn: 'root'
})
export class ChildGuard implements CanActivateChild {

  constructor(private loggerService: LoggerService) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot): boolean {
    this.loggerService.log(`CanActivate child ${childRoute.url}`);
    return true;
  }

}
