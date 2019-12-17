"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const pokemon_type_color_pipe_1 = require("./pokemon-type-color.pipe");
const border_card_directive_1 = require("./../border-card.directive");
const detail_pokemon_component_1 = require("./detail-pokemon.component");
const list_pokemon_component_1 = require("./list-pokemon.component");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
let PokemonsModule = class PokemonsModule {
};
PokemonsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [
            pokemon_type_color_pipe_1.pokemonTypeColorPipe,
            border_card_directive_1.BorderCardDirective,
            detail_pokemon_component_1.DetailPokemonComponent,
            list_pokemon_component_1.ListPokemonComponent
        ],
        provider: []
    })
], PokemonsModule);
exports.PokemonsModule = PokemonsModule;
//# sourceMappingURL=pokemons.module.js.map