import { Injectable } from "@angular/core";

import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";

@Injectable()
export class pokemonsService {
  // return all pokemons
  getPokemons(): Pokemon[] {
    return POKEMONS;
  }

  // return the pokemon with id as parameters
  getPokemons(id: number): Pokemon {
    let pokemons = this.getPokemons();

    for (let i = 0; i < pokemons.length; i++) {
      if (id === pokemon[i].id) {
        return pokemon[i];
      }
    }
  }
}
