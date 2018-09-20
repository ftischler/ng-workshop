import { Component, OnDestroy, OnInit } from '@angular/core';
import { AirportService } from '@flight-workspace/flight-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {
  public airports$: Observable<string[]>;

  constructor(private airportService: AirportService) {
  }

  ngOnInit() {
    this.airports$ = this.airportService.findAll();
  }
}
