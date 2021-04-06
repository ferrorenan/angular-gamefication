import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cardOptionsAvailable = this.cardOptions.allOptionsCards();

  constructor(
    
    private cardOptions: CardService
  ) { }

  ngOnInit(): void {
  }

}
