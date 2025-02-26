import { Routes } from '@angular/router';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';

export const routes: Routes = [
    {
        path: 'recipes',
        component: AddRecipeComponent
    }
];
