import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000/api/v1';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  fetchRecipes() {
    return this.http.get(`${URL}/recipes/home`);
  }

  fetchRecipe(id: number) {
    return this.http.get(`${URL}/recipes/${id}`);
  }
}
