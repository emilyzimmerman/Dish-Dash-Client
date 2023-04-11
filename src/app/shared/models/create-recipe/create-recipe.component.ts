import { Component, OnInit } from '@angular/core';
import { MealsService } from '../../services/meals.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {
  meals: any = [];
  constructor(private mealService: MealsService) {}

  ngOnInit(): void {
    this.mealService.fetchMeals().subscribe({
      next: (res: any) => {
        this.meals = res.payload.meal;
      },
    });
  }
}
