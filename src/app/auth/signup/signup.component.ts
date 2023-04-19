import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  error: boolean = false;
  completed: boolean = false;
  isLoading = false;

  signupForm = new FormGroup({
    email: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    phone: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const user = this.signupForm.value;
    console.log(user);
    this.isLoading = true;

    this.authService.signup(user).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.error('An error occurred:', err);
        this.error = true; // set the error message to display on the template
      },
      complete: () => {
        console.log('Request completed successfully');
        this.completed = true;
      },
    });
  }
}
