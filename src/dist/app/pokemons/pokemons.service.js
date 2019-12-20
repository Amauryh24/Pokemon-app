"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let PokemonsService = class PokemonsService {
    constructor(http) {
        this.http = http;
        this.pokemonsUrl = "api/pokemons";
    }
    log(log) {
        console.info(log);
    }
    handleError(operation = "operation", result) {
        return (error) => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);
            return rxjs_1.of(result);
        };
    }
    updatePokemon(pokemon) {
        const httpOptions = {
            headers: new http_1.HttpHeaders({ "Content-Type": "application/json" })
        };
        return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(operators_1.tap(_ => this.log(`update pokemon id=${pokemon.id}`)), operators_1.catchError(this.handleError("updatePokemon")));
    }
    // return all pokemons
    getPokemons() {
        return this.http.get(this.pokemonsUrl).pipe(operators_1.tap(_ => this.log(`fetched pokemons`)), operators_1.catchError(this.handleError(`getPokemon`, [])));
    }
    // return the pokemon with id as parameters
    getPokemon(id) {
        const url = `${this.pokemonsUrl}/${id}`;
        return this.http.get(url).pipe(operators_1.tap(_ => this.log(`fetched pokemon id=${id}`)), operators_1.catchError(this.handleError(`getPokemon id=${id}`)));
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], PokemonsService);
exports.PokemonsService = PokemonsService;
//# sourceMappingURL=pokemons.service.js.map