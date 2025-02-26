import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'recipes-recipe-form',
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    instructions: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(1000)]),
    ingredients: new FormArray([
      new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        amount: new FormControl('', Validators.maxLength(50))
      })
    ])
  });
  counter = 0;

  constructor() {}

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  get title() {
    return this.form.get('title');
  }

  get instructions() {
    return this.form.get('instructions');
  }

  addIngredient() {
    this.ingredients.push(new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      amount: new FormControl('', Validators.maxLength(50))
    }));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  generateId() {
    return this.counter += 1;
  }

  onSubmit() {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value)
  }
}
