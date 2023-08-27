import { Injectable } from '@angular/core';

export type XO = 'X' | 'O' | null

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  player: XO = 'X';

  boardState: XO[]  = ['O', null, null,
                      null, 'X', null,
                      null, 'X', 'X'];


  constructor() {}

  makeMove(position: number) {
    this.boardState[position] = this.player;
  }

  checkWinner() {
    
  }
}
