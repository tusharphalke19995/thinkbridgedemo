import { Component } from '@angular/core'
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login-3.component.html'
})

export class Login3Component {
    loginForm: FormGroup;

    submitForm(): void {
        for (const i in this.loginForm.controls) {
            this.loginForm.controls[ i ].markAsDirty();
            this.loginForm.controls[ i ].updateValueAndValidity();
        }
    }

    constructor(private fb: FormBuilder,
        private router: Router,) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            userName: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ]
        });
    }

    signIn() {
        let role: string;
        let roleType: string;

        let data = {
            'email': this.loginForm?.get('userName').value,
            'password': this.loginForm?.get('password').value
        }
        this.router.navigate(['default'])

        console.log("data",data)
    }
}    