import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CardService]
})
export class CardComponent implements OnInit {

  cardOptionsAvailable = this.cardOptionsChoice.allOptionsCards();

  constructor(

    private cardOptionsChoice: CardService
  ) { }

  ngOnInit(): void {
  }

}
