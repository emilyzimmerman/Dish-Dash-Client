import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

const URL = 'http://localhost:3000/api/v1';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  currentUsesrRecipesSubject: Subject<any> = new Subject();
  currentUserRecipes = [];
  constructor(private http: HttpClient) {}

  fetchRecipes() {
    return this.http.get(`${URL}/recipes/home`);
  }

  fetchRecipe(id: number) {
    return this.http.get(`${URL}/recipes/${id}`);
  }

  createRecipe(recipe) {
    const token = JSON.parse(localStorage.getItem('token'));

    return this.http.post('http://localhost:3000/api/v1/recipes', recipe, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }

  onAddRecipe(recipe) {
    this.setRecipes([...this.currentUserRecipes, recipe]);
  }

  setRecipes(recipes) {
    this.currentUserRecipes = recipes;
    this.currentUsesrRecipesSubject.next(recipes);
  }
}
