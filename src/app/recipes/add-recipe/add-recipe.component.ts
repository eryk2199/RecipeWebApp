import { Component } from '@angular/core';
import { RecipeFormComponent } from "../recipe-form/recipe-form.component";

@Component({
  selector: 'recipes-add-recipe',
  imports: [RecipeFormComponent],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {

}
