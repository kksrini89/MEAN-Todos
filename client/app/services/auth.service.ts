import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare var firebase;
@Injectable()
export class AuthService {
    private auth: boolean = false;

    constructor(private router: Router) { }

    signIn(credentials) {       
    }

    getAuthenticated() {
        return this.auth;
    }

    setAuthenticated(value) {        
        this.auth = value;
    }

    logout() {        
        this.router.navigate(['/signin']);
    }
}