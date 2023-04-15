import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ChatGPTComponent } from './chat-gpt/chat-gpt.component';
import { HomeComponent } from './home/home.component';
import { MealsComponent } from './meals/meals.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',

    component: HomeComponent,
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailComponent,
  },
  {
    path: 'profile/:username',
    component: ProfileComponent,
  },
  {
    //COME BACK TO --> path: 'meals/:mealType',
    path: 'meals/:id',
    component: MealsComponent,
  },
  {
    path: 'helper',
    component: ChatGPTComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
