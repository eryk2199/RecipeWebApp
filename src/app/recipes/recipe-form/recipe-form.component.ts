import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'recipes-recipe-form',
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
  form = new FormGroup({
    title: new FormControl(''),
    instructions: new FormControl(''),
    ingredients: new FormArray([
      new FormGroup({
        name: new FormControl(''),
        amount: new FormControl('')
      })
    ])
  });
  counter = 0;

  constructor() {}

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(new FormGroup({
      name: new FormControl(''),
      amount: new FormControl('')
    }));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  generateId() {
    return this.counter += 1;
  }

  onSubmit() {
    console.log(this.form.value)
  }
}
