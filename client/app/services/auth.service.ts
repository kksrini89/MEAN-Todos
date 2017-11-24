import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare var firebase;
@Injectable()
export class AuthService {
    private auth: boolean = false;

    constructor(private router: Router) { }

    signIn(credentials) {
        // firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    getAuthenticated() {
        return this.auth;
    }

    setAuthenticated(value) {
        // if (!firebase.auth().currentUser)
        //     return false;
        this.auth = value;
    }

    logout() {
        // firebase.auth().signOut();
        this.router.navigate(['/signin']);
    }
}