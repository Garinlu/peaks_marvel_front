import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CharactersComponent} from './characters/characters.component';
import {CharacterComponent} from './characters/character/character.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { LikedCharactersComponent } from './liked-characters/liked-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterComponent,
    CharacterDetailComponent,
    LikedCharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
