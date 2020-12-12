import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL_API} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  get(uri: string, parameters?: any) {
    return this.http.get(this.buildUrl(uri), {params: parameters});
  }

  /**
   * Add URI to the API URL
   */
  buildUrl(uri: string) {
    return URL_API + uri;
  }
}
