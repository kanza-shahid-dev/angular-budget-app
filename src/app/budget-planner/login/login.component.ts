import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: any;
  registerForm: any;
  activeForm: 'login' | 'register' = 'login';

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  login() {
    if (this.loginForm.valid) {
      this.router.navigate(['/budget-planner/dashboard']);
    }
  }
  register() {
    if (this.registerForm.valid) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      this.router.navigate(['/budget-planner/login']);
    } else {
      alert('Invalid Form');
    }
  }
  toggleForm(value: 'login' | 'register') {
    this.activeForm = value;
  }
}
