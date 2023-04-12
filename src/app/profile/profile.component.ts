import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../auth/user.service';
import { User } from '../shared/models/user.model';
import { RecipeService } from '../shared/services/recipe.service';

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
    private userService: UserService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      //check to see if profile user is equal to current user
      //allow current recipe state to alter component
      //get current user
      this.userService.currentUserSubject.subscribe((loggedIn: User) => {
        this.currentUser = loggedIn;
      });
      //get user from params
      const username = params.username;
      //send request to get profile user
      this.http
        .get(`http://localhost:3000/api/v1/users/${username}`)
        .subscribe({
          next: (res: any) => {
            this.profileUser = res.payload.user;
            this.profileRecipes = res.payload.user.recipes;

            //check to see if profile user is equal to current user
            if (this.currentUser.id === this.profileUser.id) {
              this.recipeService.currentUsesrRecipesSubject.subscribe(
                (currentUserRecipes) => {
                  this.profileRecipes = currentUserRecipes;
                }
              );
            }
          },
        });
    });
  }
}
