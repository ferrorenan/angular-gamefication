import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY = '530cfd7ba3d47d698e18f1ab5c6fcd4d';
  HASH = '52dc77e370c774445d662fbeb7b59de9';
  URL_API = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(
    private http: HttpClient
  ) { }

  getAllChacaracters(): Observable<any> {

    return this.http.get<any>(this.URL_API).pipe(map((data: any) => data.data.results));
  }
}

