"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var auth_service_1 = require("./services/auth.service");
var auth_guard_1 = require("./services/auth.guard");
var todos_service_1 = require("./services/todos.service");
var signin_component_1 = require("./components/SignIn/signin.component");
var todos_component_1 = require("./components/todos.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/signin', pathMatch: 'full' },
                    { path: 'signin', component: signin_component_1.SignInComponent },
                    { path: 'todos', component: todos_component_1.TodosComponent, canActivate: [auth_guard_1.AuthGuard] }
                ]),
                http_1.HttpModule, forms_1.FormsModule
            ],
            declarations: [app_component_1.AppComponent, todos_component_1.TodosComponent, signin_component_1.SignInComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [auth_service_1.AuthService, auth_guard_1.AuthGuard, todos_service_1.TodoService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map