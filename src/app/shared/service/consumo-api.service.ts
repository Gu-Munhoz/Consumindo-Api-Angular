import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';


const apiUrl = 'https://deckofcardsapi.com/api/deck/u4n4ooimcqh6/draw/?count=6';

const apiCat = 'https://api.thecatapi.com/v1/images/search';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  constructor(private http: HttpClient) { }
    
  getCard(): Observable<any>{
      return this.http.get(apiUrl);
  }

  getCat(): Observable<any>{
    return this.http.get(apiCat);
}

}
