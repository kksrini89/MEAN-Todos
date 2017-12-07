import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";

import { TodoService } from "../../services/todos.service";

@Component({
    moduleId: module.id,
    selector: 'signin',
    templateUrl: 'signin.component.html',
    styles: [`   
      .signInForm{
          margin:15%;
          text-align:center;
      }
    `
    ]
})
export class SignInComponent {
    userDetails = {
        email: '',
        password: ''
    };
    constructor(private authService: AuthService, private router: Router) {

    }

    onSignIn(form: NgForm) {
        // this.todoService.signIn(this.userDetails);
        if (form.valid) {
            this.authService.setAuthenticated(true);
            this.router.navigate(['/todos']);
        }
    }
}