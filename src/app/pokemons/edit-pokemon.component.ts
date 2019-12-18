import { PokemonsService } from "./pokemons.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "edit-pokemon",
  template: `
    <h2 class="header center">Editer {{ pokemon?.name }}</h2>
    <p class="center">
      <img [src]="pokemon.picture" />
    </p>
    <pokemon-form [pokemon]="pokemon"> </pokemon-form>
  `
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private PokemonsService: PokemonService
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.Params["id"];
    this.pokemon = this.pokemonsService.getPokemon(id);
  }
}
