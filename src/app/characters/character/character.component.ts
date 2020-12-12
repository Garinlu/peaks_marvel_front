import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Character} from '../../../models/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  constructor(private router: Router) {
  }

  state: Character;

  @Input() set character(character: Character) {
    this.state = character;
  }

  ngOnInit() {
  }

  goToDetail() {
    this.router.navigate(['/' + this.state.id]);
  }

}
