import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'auth-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = ''
  invalidCredentials = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(loginForm: NgForm) {
    if(loginForm.invalid) {
      loginForm.form.markAllAsTouched()
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      error: (e) => { this.invalidCredentials = true; },
      next: (res) => {
        if(res.status == 200) {
          this.router.navigate(["/recipes"])
        }
      }
    });
  }
}
