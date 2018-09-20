import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'logger-lib';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './config/auth.config';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private loggerService: LoggerService,
              private oauthService: OAuthService) { }
              ngOnInit() {
    this.loggerService.debug('Test');
    this.loggerService.log('Test');

    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}

