"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const core_1 = require("@angular/core");
const list_pokemon_component_1 = require("./list-pokemon.component");
const edit_pokemon_component_1 = require("./edit-pokemon.component");
const detail_pokemon_component_1 = require("./detail-pokemon.component");
const auth_guard_service_1 = require("./../auth-guard.service");
const pokemonsRoutes = [
    {
        path: "pokemon",
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            { path: "all", component: list_pokemon_component_1.ListPokemonComponent },
            {
                path: "edit/:id",
                component: edit_pokemon_component_1.EditPokemonComponent,
                canActivate: [auth_guard_service_1.AuthGuard]
            },
            { path: ":id", component: detail_pokemon_component_1.DetailPokemonComponent }
        ]
    }
];
let PokemonRoutingModule = class PokemonRoutingModule {
};
PokemonRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(pokemonsRoutes)],
        exports: [router_1.RouterModule]
    })
], PokemonRoutingModule);
exports.PokemonRoutingModule = PokemonRoutingModule;
//# sourceMappingURL=pokemons-routing.module.js.map