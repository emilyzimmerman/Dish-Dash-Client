import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  constructor(private http: HttpClient) {}

  fetchMeals() {
    return this.http.get('http://localhost:3000/api/v1/meals');
  }

  fetchMeal(id: number) {
    return this.http.get(`http://localhost:3000/api/v1/meals/${id}`);
  }
}
