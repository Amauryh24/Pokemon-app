import { Component, OnInit } from "@angular/core";

import { PokemonsService } from "./pokemons.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Pokemon } from "./pokemon";

@Component({
  selector: "edit-pokemon",
  template: `
    <h2 *ngIf="pokemon" class="header center">Editer {{ pokemon?.name }}</h2>
    <p class="center">
      <img [src]="pokemon.picture" />
    </p>
    <pokemon-form [pokemon]="pokemon"> </pokemon-form>

    <div *ngIf="!pokemon" class="center">
      <h4>Aucun pokémon à modifier !</h4>
      <div class="card-action">
        <a class="waves-effect waves-light btn center" (click)="goBack()"
          >Accueil</a
        >
      </div>
    </div>
  `
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.pokemon = this.pokemonsService.getPokemon(id);
  }
}
