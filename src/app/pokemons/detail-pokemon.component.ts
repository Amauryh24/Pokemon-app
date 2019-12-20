import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";

import { Pokemon } from "./pokemon";

import { PokemonsService } from "./pokemons.service";

@Component({
  selector: "detail-pokemon",
  templateUrl: "./app/pokemons/detail-pokemon.component.html",
  styleUrls: ["./app/pokemons/detail-pokemon.component.css"]
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.pokemonsService
      .getPokemon(id)
      .subscribe(pokemon => (this.pokemon = pokemon));
  }

  goBack(): void {
    this.router.navigate(["/pokemons"]);
  }
  goEdit(pokemon: Pokemon): void {
    let link = ["/pokemon/edit", pokemon.id];
    this.router.navigate(link);
  }
}
