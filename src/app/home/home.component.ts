import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/services/recipe.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FilterPipe],
})
export class HomeComponent implements OnInit {
  suggestedRecipes: any = [];
  meals: any = [];
  isLoading = true;

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipeService.fetchRecipes().subscribe((res: any) => {
      this.isLoading = true;
      console.log(res);
      if (res.success) {
        this.isLoading = false;
        this.suggestedRecipes = res.payload.suggested;
        this.meals = res.payload.meals;
      }
    });
  }
}
