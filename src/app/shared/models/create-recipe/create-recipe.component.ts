import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MealsService } from '../../services/meals.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {
  meals: any = [];

  recipeFormGroup = new FormGroup({
    name: new FormControl(''),
    content: new FormControl(''),
    image_path: new FormControl(''),
    meal_id: new FormControl(''),
  });
  constructor(private mealService: MealsService) {}

  ngOnInit(): void {
    this.mealService.fetchMeals().subscribe({
      next: (res: any) => {
        this.meals = res.payload.meal;
      },
    });
  }

  onSubmit() {
    console.log(this.recipeFormGroup.value);
  }
}
