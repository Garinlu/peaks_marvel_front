import {Component, OnInit} from '@angular/core';
import {CacheService} from '../../services/cache.service';
import {Character} from '../../models/character';

@Component({
  selector: 'app-liked-characters',
  templateUrl: './liked-characters.component.html',
  styleUrls: ['./liked-characters.component.scss']
})
export class LikedCharactersComponent implements OnInit {
  total = 0;
  characters: Character[];
  isLoading = true;

  constructor(private cache: CacheService) {
  }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.isLoading = true;
    this.characters = this.cache.get(CacheService.LIKED_CHARACTERS) || [];
    this.total = this.characters.length;
    this.isLoading = false;
  }

}
