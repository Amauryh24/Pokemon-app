import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  canActivate() {
    console.info("le guard à bien été appelé");
    return true;
  }
}
