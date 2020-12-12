import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Character} from '../../../models/character';
import {CacheService} from '../../../services/cache.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  state: Character;
  isLiked = false;

  @Output() likeChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router, private cache: CacheService) {
  }

  @Input() set character(character: Character) {
    this.state = character;
    this.checkIsLiked();
  }

  checkIsLiked() {
    const likedCharacters = this.cache.get(CacheService.LIKED_CHARACTERS) || [];
    this.isLiked = likedCharacters.findIndex((char) => {
      return char.id === this.state.id;
    }) > -1;
  }

  ngOnInit() {
  }

  goToDetail() {
    this.router.navigate(['/' + this.state.id]);
  }

  like() {
    const likedCharacters: Character[] = this.cache.get(CacheService.LIKED_CHARACTERS) || [];
    const index = likedCharacters.findIndex((character) => {
      return character.id === this.state.id;
    });
    if (index < 0) {
      likedCharacters.push(this.state);
    } else {
      likedCharacters.splice(index, 1);
    }
    this.cache.set(CacheService.LIKED_CHARACTERS, likedCharacters);
    this.checkIsLiked();
    this.likeChange.emit();
  }

}
