import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Pokemon } from "./pokemon";
import { PokemonsService } from "./pokemons.service";

@Component({
  selector: "list-pokemon",
  templateUrl: `./app/pokemons/list-pokemon.component.html`
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[] = null;

  constructor(
    private router: Router,
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit() {
    this.pokemons = this.pokemonsService.getPokemons();
  }
  getPokemons() {
    this.pokemonService
      .getPokemons()
      .subscribe(pokemons => (this.pokemons = pokemons));
  }
  selectPokemon(pokemon: Pokemon) {
    // alert("vous avez cliqué sur " + pokemon.name);
    let link = ["/pokemon", pokemon.id];
    this.router.navigate(link);
  }
}
