import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from '../shared/service/consumo-api.service';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrls: ['./consumo-api.component.scss']
})
export class ConsumoApiComponent implements OnInit {

  public cards: any; 

  public cats: any;

  constructor(private consumoApiService: ConsumoApiService ) { }

  ngOnInit(): void {
    this.consumoApiService.getCard().subscribe(dados =>{
      this.cards = dados.cards;
    
    })

    this.consumoApiService.getCat().subscribe(dados => {
      this.cats = dados;
      console.log(this.cats)
    })
  }

}
