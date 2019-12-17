import { AppRoutingModule } from "./app-routing.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ListPokemonComponent } from "./list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon.component";

import { BorderCardDirective } from "./border-card.directive";
import { pokemonTypeColorPipe } from "./pokemon-type-color.pipe";

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    BorderCardDirective,
    pokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
