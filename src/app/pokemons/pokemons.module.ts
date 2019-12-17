import { PokemonRoutingModule } from './pokemons-routing.module';

import { pokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './../border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon.component';

import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";



@NgModule({
imports : [CommonModule, PokemonRoutingModule],
declarations:[
pokemonTypeColorPipe,
BorderCardDirective,
DetailPokemonComponent,
    ListPokemonComponent
]
provider:[]
})

export class PokemonsModule {}