import { Router } from "@angular/router";
import { PokemonsService } from "./pokemons.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "pokemon-form",
  templateUrl: "app/pokemon/pokemon-form.component.html",
  styleUrls:["app/pokemon/pokemon-form.component.css"]
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: Array<string>;

  constructor(
    private pokemonsService: PokemonsService,
    private router: Router
  ) {}
  //
  ngOnInit() {
    this.types = this.pokemonsService.getPokemonTypes();
  }

  hasType(type: string): boolean {
    let index = this.pokemon.types.indexOf(type);
    if (~index) return true;
    return false;
  }

  selectType($event: any, type: string): void {
    let checked = $event.target.checked;
    if (checked) {
      this.pokemon.types.push(type);
    } else {
      let index = this.pokemon.types.indexOf(type);
      if (~index) {
        this.pokemons.types.splice(index, 1);
      }
    }
  }

isTypesValid(type:string) : boolean{
  if(this.pokemon.types.length =>3 && !this.hasType(type)){
    return false
  }
  return true
}

  onSubmit(): void {
    console.log("submit form !");
    let link = ["/pokemon", this.pokemon.id];
    this.router.navigate(link);
  }
}
