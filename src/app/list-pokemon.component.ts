import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";

import { Router } from "@angular/router";

@Component({
  selector: "list-pokemon",
  templateUrl: `./app/list-pokemon.component.html`
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[] = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    alert("vous avez cliqué sur " + pokemon.name);
    let link = ["/pokemon", pokemon.id];
    this.router.navigate(link);
  }
}
