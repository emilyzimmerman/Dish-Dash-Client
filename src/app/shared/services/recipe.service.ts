import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  fetchRecipe() {
    return this.http.get('http://localhost:3000/api/v1/recipes/home');
  }
}
