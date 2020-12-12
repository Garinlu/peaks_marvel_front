import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpService) {
  }

  getCharacters(offset = 100, limit = 20) {
    return this.http.get('/characters', {offset, limit});
  }

  getCharacter(characterId) {
    return this.http.get('/character/' + characterId);
  }

  getCharacterComics(characterId, offset = 0, limit = 3) {
    return this.http.get('/character/' + characterId + '/comics', {offset, limit});
  }
}
