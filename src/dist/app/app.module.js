"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_not_found_component_1 = require("./page-not-found.component");
const app_routing_module_1 = require("./app-routing.module");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const list_pokemon_component_1 = require("./list-pokemon.component");
const detail_pokemon_component_1 = require("./detail-pokemon.component");
const border_card_directive_1 = require("./border-card.directive");
const pokemon_type_color_pipe_1 = require("./pokemon-type-color.pipe");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule],
        declarations: [
            app_component_1.AppComponent,
            border_card_directive_1.BorderCardDirective,
            pokemon_type_color_pipe_1.pokemonTypeColorPipe,
            list_pokemon_component_1.ListPokemonComponent,
            detail_pokemon_component_1.DetailPokemonComponent,
            page_not_found_component_1.PageNotFoundComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map