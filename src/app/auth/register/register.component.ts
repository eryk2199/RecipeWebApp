import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

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
  error = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(registerForm: NgForm) {
    if(registerForm.invalid) {
      registerForm.form.markAllAsTouched()
      return;
    }
    if(this.password !== this.confirmPassword) {
      registerForm.form.get('confirmPassword')?.setErrors({noMatch: true});
      return;
    }
    this.authService.register(this.email, this.password).subscribe({
      error: e => { this.error = true },
      next: res => { this.router.navigate(["/login"])}
    })

  }

}

