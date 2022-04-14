import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// to use the key stored in our environment, lets import the environment file
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  // to use the http client we import it here
  constructor(private http: HttpClient) { }
// for fetching pf trending gifs using the url stored in our environment
  fetchTrendingGifs(){
    return this.http.get(environment.myGiphyApiKey);
    
}
// for searching endpoint or searching of gifs using the url stored in our environment
  searchGifs(){
    return this.http.get(environment.searchUrl);
  }
}
