import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  //Assign properties
  recipe: any = null;
  meal: any = null;
  user: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const recipeId = params.id;
      this.recipeService.fetchRecipe(recipeId).subscribe({
        next: (res: any) => {
          this.recipe = res.payload.recipe;
          this.meal = res.payload.recipe.meal;
          this.user = res.payload.recipe.user;
        },
      });
    });
  }
}
