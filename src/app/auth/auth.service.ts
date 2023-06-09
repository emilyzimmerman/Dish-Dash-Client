import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../shared/services/recipe.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private route: Router,
    private userService: UserService,
    private recipeService: RecipeService
  ) {}

  signup(user) {
    return this.http.post('http://localhost:3000/api/v1/users/create', user);
  }

  login(user) {
    return this.http.post('http://localhost:3000/api/v1/users/login', user);
  }

  autoSignIn() {
    // get token from browser
    const token = this.getToken();
    if (!token) {
      //goes through normal walk through --> shows login and sign up page
      return;
    }

    this.http
      .get('http://localhost:3000/api/v1/users/me', {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      .subscribe((res: any) => {
        if (res.success) {
          this.userService.setCurrentUser(res.payload.user);
          this.recipeService.setRecipes(res.payload.user.recipes);
          console.log(res);
          //navigate to home
          //this.route.navigate(['/home']);
        }
      });

    //send request to get user information
  }

  logout() {
    const token = this.getToken();

    this.http
      .delete('http://localhost:3000/api/v1/users/logout', {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      .subscribe((res: any) => {
        if (res.success) {
          this.removeToken();
          this.userService.setCurrentUser(null);
          this.route.navigate(['/login']);
        }
      });
  }

  getToken() {
    return JSON.parse(localStorage.getItem('token'));
  }

  setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
