import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Character} from '../../models/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  characterId: string;
  isLoading = true;

  character: Character;
  comics: string[];

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {
    this.characterId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.api.getCharacter(this.characterId).subscribe((character: Character) => {
      this.character = character;
      this.api.getCharacterComics(this.characterId).subscribe((comics: string[]) => {
        this.comics = comics;
        this.isLoading = false;
      }, error => {
        this.goList();
      });
    }, error => {
      this.goList();
    });
  }

  goList() {
    this.router.navigate(['']);
  }

}
