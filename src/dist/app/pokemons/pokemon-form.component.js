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
const router_1 = require("@angular/router");
const pokemons_service_1 = require("./pokemons.service");
const pokemon_1 = require("./pokemon");
let PokemonFormComponent = class PokemonFormComponent {
    constructor(pokemonsService, router) {
        this.pokemonsService = pokemonsService;
        this.router = router;
    }
    //
    ngOnInit() {
        this.types = this.pokemonsService.getPokemonTypes();
    }
    hasType(type) {
        let index = this.pokemon.types.indexOf(type);
        if (~index)
            return true;
        return false;
    }
    selectType($event, type) {
        let checked = $event.target.checked;
        if (checked) {
            this.pokemon.types.push(type);
        }
        else {
            let index = this.pokemon.types.indexOf(type);
            if (~index) {
                this.pokemon.types.splice(index, 1);
            }
        }
    }
    isTypesValid(type) {
        if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
            return false;
        }
        return true;
    }
    onSubmit() {
        console.log("submit form !");
        this.pokemonsService
            .updatePokemon(this.pokemon)
            .subscribe(_ => this.goBack());
    }
    goBack() {
        let link = ["/pokemon", this.pokemon.id];
        this.router.navigate(link);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", pokemon_1.Pokemon)
], PokemonFormComponent.prototype, "pokemon", void 0);
PokemonFormComponent = __decorate([
    core_1.Component({
        selector: "pokemon-form",
        templateUrl: "./app/pokemons/pokemon-form.component.html",
        styleUrls: ["./app/pokemons/pokemon-form.component.css"]
    }),
    __metadata("design:paramtypes", [pokemons_service_1.PokemonsService,
        router_1.Router])
], PokemonFormComponent);
exports.PokemonFormComponent = PokemonFormComponent;
//# sourceMappingURL=pokemon-form.component.js.map