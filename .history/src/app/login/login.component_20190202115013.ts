import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginAuthService } from '../services/login/login-auth.service';
import { AppSettings } from '../app-settings';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginAuthService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private loginAuthService: LoginAuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }
  

  validate()
   {
     this.submitted = true ;

     // stop here if form is invalid
      if (this.loginForm.invalid) {
        return;
     }
      // this.loginAuthService.printLogin(this.f.username.value, this.f.password.value);
      this.loginAuthService.loginAuth(this.f.username.value, this.f.password.value).subscribe(data => {
        console.log(data);
        if (data) {
          this.router.navigate(['/dashboard']);
        } else {
           alert('FAILURE');
        }
      });
    }
  }

