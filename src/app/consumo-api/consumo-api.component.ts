import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConsumoApiService } from '../shared/service/consumo-api.service';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrls: ['./consumo-api.component.scss']
})
export class ConsumoApiComponent implements OnInit {

  public cards: any; 

  public cats: any;

  public url!: string;

  constructor(private consumoApiService: ConsumoApiService ) { }


  ngOnInit(): void {
    this.consumoApiService.getCat().subscribe(dados => {
      this.cats = dados;
      console.log(this.cats)
    })
  }

  GeradorDeck(){
    this.consumoApiService.geradorDeck().subscribe(id =>{
      this.url = `https://deckofcardsapi.com/api/deck/${id.deck_id}/draw/?count=6`;
    })

    this.carregarDeck();
  }

  carregarDeck() {

    setTimeout(() => {
      this.consumoApiService.getCard(this.url).subscribe(dados =>{
        this.cards = dados.cards;
      })
    }, 200);
    
  }

}
