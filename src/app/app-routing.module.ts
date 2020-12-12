import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharactersComponent} from './characters/characters.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {LikedCharactersComponent} from './liked-characters/liked-characters.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent
  },
  {
    path: 'liked',
    component: LikedCharactersComponent
  },
  {
    path: ':id',
    component: CharacterDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
