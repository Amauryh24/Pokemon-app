"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const mock_pokemons_1 = require("./mock-pokemons");
let PokemonsService = class PokemonsService {
    // return all pokemons
    getPokemons() {
        return mock_pokemons_1.POKEMONS;
    }
    // return the pokemon with id as parameters
    getPokemon(id) {
        let pokemons = this.getPokemons();
        for (let i = 0; i < pokemons.length; i++) {
            if (id === pokemons[i].id) {
                return pokemons[i];
            }
        }
    }
    getPokemonTypes() {
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
};
PokemonsService = __decorate([
    core_1.Injectable()
], PokemonsService);
exports.PokemonsService = PokemonsService;
//# sourceMappingURL=pokemons.service.js.map