import { Injectable } from "@angular/core";

import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";

@Injectable()
export class PokemonsService {
  // return all pokemons
  getPokemons(): Pokemon[] {
    return POKEMONS;
  }

  // return the pokemon with id as parameters
  getPokemon(id: number): Pokemon {
    let pokemons = this.getPokemons();

    for (let i = 0; i < pokemons.length; i++) {
      if (id === pokemons[i].id) {
        return pokemons[i];
      }
    }
  }

  getPokemonTypes(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol"
    ];
  }
}
