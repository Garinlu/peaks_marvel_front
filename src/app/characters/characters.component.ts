import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Character} from '../../models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[];
  isLoading = true;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getCharacters().subscribe((chars: Character[]) => {
      this.characters = chars;
      this.isLoading = false;
    }, error => {
      this.characters = [];
      this.isLoading = false;
    });
  }

}
