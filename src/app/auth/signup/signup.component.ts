import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit() {
    const user = this.signupForm.value;
    console.log(user);
    this.http
      .post('http://localhost:3000/api/v1/users/create', user)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.error('An error occurred:', err);
        },
        complete: () => {
          console.log('Request completed successfully');
        },
      });
  }
}
