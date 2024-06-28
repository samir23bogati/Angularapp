import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  public email: string = '';
  public password: string = '';
  public isSubmitting: boolean = false;

  constructor(private router: Router) {

  }
loginNow() {
  this.isSubmitting = true;
  setTimeout(() => {
      this.isSubmitting = false;
      this.router.navigate(['product']);
  }, 5000);
}

}