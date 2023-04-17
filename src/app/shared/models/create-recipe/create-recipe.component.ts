import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MealsService } from '../../services/meals.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;

  meals: any = [];
  errors: any = [];

  recipeFormGroup = new FormGroup({
    name: new FormControl(''),
    content: new FormControl(''),
    image_path: new FormControl(''),
    meal_id: new FormControl(''),
  });
  constructor(
    private mealService: MealsService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.mealService.fetchMeals().subscribe({
      next: (res: any) => {
        this.meals = res.payload.meal;
      },
    });
  }

  onSubmit() {
    const newRecipe = this.recipeFormGroup.value;
    this.recipeService.createRecipe(newRecipe).subscribe({
      next: (res: any) => {
        this.closeBtn.nativeElement.click();
        this.recipeService.onAddRecipe(res.payload.recipe);
      },
      error: (errorRes) => {
        this.errors = errorRes.error.errors;
      },
    });
  }
}
