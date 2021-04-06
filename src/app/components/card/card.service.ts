import { Injectable } from '@angular/core';

export interface ItemsCard {

  id: string,
  ariaLabel: string,
  description: string,
}

@Injectable()
export class CardService {

  constructor() { }

  allOptionsCards(): ItemsCard[] {
    
    return [
      {
        id: 'randomPlaylist',
        ariaLabel: 'Random Playlist',
        description: 'Random Playlist',
      },
      {
        id: 'randomPlaylist',
        ariaLabel: 'Random Playlist',
        description: 'Random Meme',
      }
    ]
  }
}
