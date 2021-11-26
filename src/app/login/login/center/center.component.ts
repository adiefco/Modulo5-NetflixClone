import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {
  loginForm: any;
  // new FormGroup({
  //     user: new FormControl(''),
  //     password: new FormControl('')
  //   });

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.loginForm);
    console.log(this.loginForm);
    this.loginForm = this.fb.group({
      user: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]]
    })


  }

  logMeIn() {
    if (this.loginForm.valid) {
      return this.appService.postLogin().subscribe(response => {
        let objData = JSON.parse(response);
        this.logIn(objData.token);
        console.log(objData);
      })
    } else {
      return false;
    }
  }

  logIn(token: string) {
    localStorage.setItem('token', token);
    this.resetFormValues();
    if (this.authService.intendeduUrl !== '') {
      this.router.navigate([this.authService.intendeduUrl]);
    } else {
      this.router.navigate(['/usuarios'])
    }
  }

  resetFormValues() {
    this.loginForm.reset();
  }
}
