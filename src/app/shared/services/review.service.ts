import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  createReview(review, id) {
    const token = JSON.parse(localStorage.getItem('token'));

    return this.http.post(
      'http://localhost:3000/api/v1/reviews',
      {
        ...review,
        recipe_id: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
  }
}
