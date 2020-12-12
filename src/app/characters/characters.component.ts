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
  total: number;
  currentPage = 6;
  limit = 20;
  isLoading = true;
  isLastPage = false;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.isLoading = true;
    this.characters = [];
    const offset = (this.currentPage - 1) * 20;
    this.api.getCharacters(offset, this.limit).subscribe((data: { total: number, data: Character[] }) => {
      this.characters = data.data;
      this.total = data.total;
      this.isLastPage = offset + this.characters.length === this.total;
      this.isLoading = false;
    }, error => {
      this.characters = [];
      this.isLoading = false;
    });
  }

  nextPage() {
    this.currentPage += 1;
    this.loadCharacters();
  }

  prevPage() {
    this.currentPage -= 1;
    this.loadCharacters();
  }

}
