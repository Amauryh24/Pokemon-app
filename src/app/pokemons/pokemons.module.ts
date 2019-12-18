import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { PokemonRoutingModule } from "./pokemons-routing.module";
import { FormsModule } from "@angular/forms";

import { pokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { BorderCardDirective } from "./border-card.directive";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon.component";
import { PokemonFormComponent } from "./pokemon-form.component";

import { PokemonsService } from "./pokemons.service";

@NgModule({
  imports: [CommonModule, FormsModule, PokemonRoutingModule],
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    PokemonFormComponent,
    BorderCardDirective,
    pokemonTypeColorPipe
  ],
  providers: [PokemonsService]
})
export class PokemonsModule {}
