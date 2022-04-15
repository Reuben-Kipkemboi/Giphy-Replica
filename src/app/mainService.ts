import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
// to use the key stored in our environment, lets import the environment file
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  // to use the http client we import it here
  constructor(private http: HttpClient) {}
  // for fetching pf trending gifs using the url stored in our environment
  fetchTrendingGifs(): Observable<any> {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${environment.myGiphyApiKey}&limit=12&rating=g`
    );
  }
  // Load more Gifs
  
  // for searching endpoint or searching of gifs using the url stored in our environment
  searchGifs(searchTerm:string): Observable<any> {
    return this.http.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${environment.myGiphyApiKey}&q=${searchTerm}&limit=12&offset=0&rating=g&lang=en`
    );
  }
}
