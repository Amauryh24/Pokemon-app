import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { tap, delay } from "rxjs/operators";

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false; // user connected ?
  redirectUrl: string; // path user after login

  //méthode de connexion
  login(name: string, password: string): Observable<boolean> {
    let isLoggedIn = name === "admin" && password === "admin";
    return of(true).pipe(
      delay(1000),
      tap(val => (this.isLoggedIn = isLoggedIn))
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
