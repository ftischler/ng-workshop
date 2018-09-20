import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'logger-lib';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
    this.loggerService.debug('Test');
    this.loggerService.log('Test');
  }
}

