import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {pluck} from 'rxjs/operators';
import { AuthService } from '../shared/auth/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public loginGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  public credentialsInvalid = false;

  constructor(private route: ActivatedRoute, private authService: AuthService) {
  }

  needsLogin: boolean;

  ngOnInit() {
    this.route.params
      .pipe(pluck('needsLogin'))
      .subscribe(
        (v: boolean) => this.needsLogin = v
      )
  }

  get userName(): string {
    return this.authService.userName;
  }

  login(): void {
    if (this.loginGroup.valid) {
      this.credentialsInvalid = !this.authService.login(this.loginGroup.value);
    }
  }

  logout(): void {
    this.authService.logout();
  }


}
