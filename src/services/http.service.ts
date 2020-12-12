import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {URL_API} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  get(url: string, parameters?: any) {
    url = this.buildUrl(url);
    return this.http.get(url, {params: parameters});
  }

  post(url: string, body: any = {}, parameters?: any) {
    url = this.buildUrl(url);
    return this.http.post(url, body, {params: parameters});
  }

  put(url: string, body: any = {}, parameters?: any) {
    url = this.buildUrl(url);
    return this.http.put(url, body, {params: parameters});
  }

  delete(url: string, parameters?: any) {
    url = this.buildUrl(url);
    return this.http.delete(url, {params: parameters});
  }

  buildUrl(url: string) {
    // return URL_API + url + this.buildParameters(parameters);
    return URL_API + url;
  }

  buildParameters(parameters?: any) {
    // let _parameters = '';
    // if (!parameters) {
    //   return _parameters;
    // }
    // _parameters = Object.keys(parameters).length > 0 ? '?' : '';
    //
    // const keys = Object.keys(parameters);
    // keys.forEach((key, index) => {
    //   _parameters += key + '=' + encodeURIComponent(parameters[key]);
    //
    //   if (index < (keys.length - 1)) {
    //     _parameters += '&';
    //   }
    // });
    //
    // return _parameters;
  }

  prepareQuery(headers?: any) {
    const data: any = {};
    data.headers = new HttpHeaders(headers);
    return data;
  }
}
