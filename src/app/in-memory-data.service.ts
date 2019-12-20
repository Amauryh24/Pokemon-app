import { POKEMONS } from "./mock-pokemons";
import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let pokemons = POKEMONS;
    return { pokemons };
  }
}
