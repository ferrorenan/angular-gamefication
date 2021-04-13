import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from './character/shared/characters-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(
    private characterService: CharactersApiService
  ) { }

  allCharacters: Observable<any> | undefined;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.allCharacters = this.characterService.getAllChacaracters();
  }

}
