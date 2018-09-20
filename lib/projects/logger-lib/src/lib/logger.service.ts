import { Injectable, Optional } from '@angular/core';
import { LoggerConfig } from './logger.config';
import { LogFormatterService } from './log-formatter.service';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(@Optional() private config: LoggerConfig,
              private logFormatterService: LogFormatterService) {
    console.debug('logger-service');
    console.debug('config', config);
  }

  debug(message: string): void {
    if (!this.config.enableDebug) return;
    console.debug(this.logFormatterService.format(message));
  }

  log(message: string): void {
    console.log(this.logFormatterService.format(message));
  }

}
