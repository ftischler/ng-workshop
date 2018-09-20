import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { pluck, startWith } from 'rxjs/operators';
import { AuthService } from '../shared/auth/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  needsLogin$: Observable<boolean>;

  get userName(): string {
    return this.authService.userName;
  }

  ngOnInit() {
    this.needsLogin$ = this.activatedRoute.params.pipe(
      pluck('needsLogin')
    )
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
