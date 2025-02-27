import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'auth-register',
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email = '';
  password = '';
  confirmPassword = '';

  onSubmit(registerForm: NgForm) {
    if(registerForm.invalid) {
      registerForm.form.markAllAsTouched()
      return;
    }
    if(this.password !== this.confirmPassword) {
      registerForm.form.get('confirmPassword')?.setErrors({noMatch: true});
      return;
    }
    console.log({
      email: this.email,
      password: this.password
    })
  }

}

