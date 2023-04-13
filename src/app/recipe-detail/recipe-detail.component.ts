import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../auth/user.service';
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
  currentUser = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private userService: UserService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.recipeService.detailRecipeSubject.subscribe((updatedrecipe: any) => {
      this.recipe = updatedrecipe;
    });

    this.userService.currentUserSubject.subscribe((currentUser: any) => {
      this.currentUser = currentUser;
    });

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

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe.id).subscribe({
      next: (res: any) => {
        this.route.navigate([`/profile/${this.currentUser.username}`]);
      },
    });
  }
}
