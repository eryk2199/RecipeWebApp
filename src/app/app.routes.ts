import { Routes } from '@angular/router';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
    {
        path: 'recipes',
        component: AddRecipeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];
