import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  player: XO = 'X'

  boardState: XO[][]  = [[null, null, null],
                        [null, null, null],
                        [null, null, null]];


  constructor() { }

  checkWinner() {
    
  }
}
