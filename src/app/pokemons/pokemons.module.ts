import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { PokemonRoutingModule } from "./pokemons-routing.module";
import { FormsModule } from "@angular/forms";

import { ListPokemonComponent } from "./list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon.component";
import { PokemonFormComponent } from "./pokemon-form.component";
import { PokemonSearchComponent } from './search-pokemon.component';
import { BorderCardDirective } from "./border-card.directive";
import { pokemonTypeColorPipe } from "./pokemon-type-color.pipe";


import { PokemonsService } from "./pokemons.service";

@NgModule({
  imports: [CommonModule, FormsModule, PokemonRoutingModule],
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    PokemonFormComponent,
    PokemonSearchComponent
    BorderCardDirective,
    pokemonTypeColorPipe
  ],
  providers: [PokemonsService]
})
export class PokemonsModule {}
