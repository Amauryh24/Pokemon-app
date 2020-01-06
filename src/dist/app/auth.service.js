"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
let AuthService = class AuthService {
    constructor() {
        this.isLoggedIn = false; // user connected ?
    }
    //méthode de connexion
    login(name, password) {
        let isLoggedIn = name === "admin" && password === "admin";
        return rxjs_1.of(true).pipe(operators_1.delay(1000), operators_1.tap(val => (this.isLoggedIn = isLoggedIn)));
    }
    logout() {
        this.isLoggedIn = false;
    }
};
AuthService = __decorate([
    core_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map