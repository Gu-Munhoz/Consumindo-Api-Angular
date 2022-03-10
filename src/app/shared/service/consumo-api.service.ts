import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';




const apiCat = 'https://api.thecatapi.com/v1/images/search';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  constructor(private http: HttpClient) { }
    
  getCard(url: string): Observable<any>{
      return this.http.get(url);
  }

  getCat(): Observable<any>{
    return this.http.get(apiCat);
  }

  geradorDeck(): Observable<any>{
    return this.http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  }

}
