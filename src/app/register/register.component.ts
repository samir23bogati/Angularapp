import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {

    public fullname: string = '';
    public email: string = '';
    public password: string = '';
    public isSubmitting: boolean = false;

    constructor(private router: Router) {
    }

    ngOnInit() {

    }

    registerNow() {
        this.isSubmitting = true;
        setTimeout(() => {
            this.isSubmitting = false;
            this.router.navigate(['login']);
        }, 5000)
    }

}