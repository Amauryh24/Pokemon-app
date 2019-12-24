import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Observable, Subject, of } from 'rxjs';

import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: "pokemon-search",
  templateUrl: "./app/pokemon/search-pokemon.component.ts"
})
export class PokemonSearchComponent implements OnInit {
  private searchTerms = new Subject<string>();
  pokemon$: Observable<Pokemon[]>;

  constructor(
    private pokemonsService: PokemonsService,
    private router: Router
  ) {}

search (term:string) : void {
  this.searchTerms.next(term);
}

ngOnInit(): void {
  this.pokemons$ = this.searchTrems.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((term:string), => this.pokemonsService.searchPokemons(term)),
  );
}

gotoDetail(pokemon : Pokemon) : void{
  let link = ['/pokmon', pokemon.id];
  this.router.navigate(link);
}

}
