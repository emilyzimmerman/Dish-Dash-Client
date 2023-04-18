import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './filter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NavComponent } from './shared/nav/nav.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateRecipeComponent } from './shared/models/create-recipe/create-recipe.component';
import { EditRecipeComponent } from './shared/models/edit-recipe/edit-recipe.component';
import { MealsComponent } from './meals/meals.component';
import { ChatGPTComponent } from './chat-gpt/chat-gpt.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CreateReviewComponent } from './shared/models/create-review/create-review.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    FilterPipe,
    RecipeDetailComponent,
    ProfileComponent,
    CreateRecipeComponent,
    EditRecipeComponent,
    MealsComponent,
    ChatGPTComponent,
    ReviewsComponent,
    CreateReviewComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
