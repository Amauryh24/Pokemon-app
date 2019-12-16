import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";

@Component({
  selector: "pokemon-app",
  templateUrl: `./app/app.component.html`
})
export class AppComponent implements OnInit {

  private pokemons: Pokemon[] = null;
  private title: string="Liste de Pokémons with Angular 8";
  ngOnInit() {
    this.pokemons = POKEMONS;
  },

  selectPokemon(pokemon: Pokemon){
    alert("vous avez cliqué sur " + pokemon.name)
  }
}
