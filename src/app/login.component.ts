import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Component } from "@angular/core";

@Component({
  selector: "login",
  template: `
    <div class="row">
      <div class="col s12 m4 offset-m4">
        <div class="card hoverable">
          <div class="card-content center">
            <span class="card-title">Page de connexion</span>
            <p>
              <em>{{ message }}</em>
            </p>
          </div>
          <form #loginForm="ngForm">
            <div>
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                [(ngModel)]="name"
                name="name"
                required
              />
            </div>
            <div>
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                [(ngModel)]="password"
                name="password"
                required
              />
            </div>
          </form>
          <div class="card-action center">
            <a
              (click)="login()"
              class="waves-effect waves-light btn"
              *ngIf="!authService.isLoggedIn"
              >Se connecter</a
            >
            <a (click)="logout()" *ngIf="authService.isLoggedIn"
              >Se déconnecter</a
            >
          </div>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  message: string = "vous êtes connecté";
  private name: string;
  private password: string;

  constructor(private authService: AuthService, private route: Router) {}

  setMessage() {
    this.message = this.authService.isLoggedIn
      ? "Vous êtes connecté"
      : "Idendifiant ou mot de passe incorrect";
  }

  login() {
    this.message = "Tentative de connexion en cours ...";
    this.authService.login(this.name, this.password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl
          ? this.authService.redirectUrl
          : "/pokemon/all";
        this.route.navigate([redirect]);
      } else {
        this.password = "";
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
