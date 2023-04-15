import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealsService } from '../shared/services/meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
})
export class MealsComponent implements OnInit {
  meal: any;
  recipes: any[];
  constructor(
    private mealService: MealsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const mealId = params.id;
      console.log('mealId', mealId); // log mealId to verify it's correct
      this.mealService.fetchMeal(mealId).subscribe({
        next: (res: any) => {
          console.log('res', res); // log response to verify its content
          this.meal = res.payload.meal;
          if (this.meal && this.meal.recipes) {
            this.recipes = this.meal.recipes;
          }
          console.log('MEALS TEST', res);
        },
        error: (err) => console.error(err), // log any errors
      });
    });
  }
}
