import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    RecipeDetailComponent,
    ProfileComponent,
    CreateRecipeComponent,
    EditRecipeComponent,
    MealsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
