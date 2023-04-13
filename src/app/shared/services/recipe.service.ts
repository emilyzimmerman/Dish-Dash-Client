import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const URL = 'http://localhost:3000/api/v1';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  currentUsesrRecipesSubject: Subject<any> = new Subject();
  detailRecipeSubject: Subject<any> = new Subject();
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

  onUpdateRecipe(updatedRecipe, id) {
    const token = JSON.parse(localStorage.getItem('token'));

    return this.http.put(
      `http://localhost:3000/api/v1/recipes/${id}`,
      updatedRecipe,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
  }

  updateRecipe(editRecipe: any) {
    this.detailRecipeSubject.next(editRecipe);
    const index = this.currentUserRecipes.findIndex(
      (recipe) => recipe.id === editRecipe.id
    );
    this.currentUserRecipes[index] = editRecipe;
    this.setRecipes(this.currentUserRecipes);
  }

  deleteRecipe(id) {
    const token = JSON.parse(localStorage.getItem('token'));
    return this.http.delete(`http://localhost:3000/api/v1/recipes/${id}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
  }
}
