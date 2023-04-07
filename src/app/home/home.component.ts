import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  suggestedRecipes: any = [];
  meals: any = [];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.fetchRecipes().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        this.suggestedRecipes = res.payload.suggested;
        this.meals = res.payload.meals;
      }
    });
  }
}
