import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MealsService } from '../../services/meals.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
})
export class EditRecipeComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @Input() recipe = null;
  errors = [];
  meals = [];
  recipeFormGroup;

  constructor(
    private mealService: MealsService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipeFormGroup = new FormGroup({
      name: new FormControl(this.recipe.name),
      content: new FormControl(this.recipe.content),
      image_path: new FormControl(this.recipe.image_path),
      meal_id: new FormControl(this.recipe.meal_id),
    });

    this.mealService.fetchMeals().subscribe({
      next: (res: any) => {
        this.meals = res.payload.meal;
      },
    });
  }

  onSubmit() {
    const editedRecipe = this.recipeFormGroup.value;
    this.recipeService.onUpdateRecipe(editedRecipe, this.recipe.id).subscribe({
      next: (res: any) => {
        this.closeBtn.nativeElement.click();

        this.recipeService.updateRecipe(res.payload.recipe);
      },

      error: (errorRes) => {
        this.errors = errorRes.error.errors;
      },
    });
  }
}
