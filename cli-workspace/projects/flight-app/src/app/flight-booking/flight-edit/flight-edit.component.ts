import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CanDeactivateComponent } from '../../shared/can-deactivation/can-deactivate.guard';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit, CanDeactivateComponent {
  id: string;
  showDetails: string;
  showWarning = false;

  private decision$ = new Subject<boolean>();

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }

  decide(decision: boolean): void {
    this.decision$.next(decision);
    this.showWarning = false;
  }

  canDeactivate(): Observable<boolean> {
    this.showWarning = true;
    return this.decision$.asObservable();
  }
}
