import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../auth/user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileRecipes = null;
  profileUser: any = null;
  currentUser: User = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userService.currentUserSubject.subscribe((loggedIn: User) => {
        this.currentUser = loggedIn;
      });
      const username = params.username;
      this.http
        .get(`http://localhost:3000/api/v1/users/${username}`)
        .subscribe({
          next: (res: any) => {
            this.profileUser = res.payload.user;
            this.profileRecipes = res.payload.user.recipes;
          },
        });
    });
  }
}
