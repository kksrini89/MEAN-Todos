import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { TodoService } from './services/todos.service';
import { SignInComponent } from "./components/SignIn/signin.component";
import { TodosComponent } from './components/todos.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/signin', pathMatch: 'full' },
      { path: 'signin', component: SignInComponent },
      { path: 'todos', component: TodosComponent, canActivate: [AuthGuard] }
    ]),
    HttpModule, FormsModule
  ],
  declarations: [AppComponent, TodosComponent, SignInComponent],
  bootstrap: [AppComponent],
  providers: [AuthService, AuthGuard, TodoService]
})

export class AppModule { }
