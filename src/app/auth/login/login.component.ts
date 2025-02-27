import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'auth-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = ''

  onSubmit(loginForm: NgForm) {
    if(loginForm.invalid) {
      loginForm.form.markAllAsTouched()
      return;
    }

    console.log({
      email: this.email,
      password: this.password
    })
  }
}
