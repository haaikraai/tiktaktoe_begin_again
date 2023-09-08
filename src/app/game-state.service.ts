import { Injectable } from '@angular/core';
import { SquareComponent } from './square/square.component';

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

  valueFromIndex(index: number) {
    return this.boardState[index];
  }

  makeMove(position: number) {
    this.boardState[position] = this.player;
    if (this.player == 'X') this.player = 'O'
    else this.player = 'X';

    // console.log('\n\nSENDING THE WHOLE INSTANCE OF THE CLICKED BLOCK TO MAKEMOVE HAHA, LOVEIT:')
    // console.log(position)
    this.checkWinner();
  }

  checkWinner() {
    console.log('checking the winner after every move');

    const ancCheck:XO = this.boardState[0];

    if ((this.boardState[0] == this.boardState[1] && this.boardState[1] == this.boardState[2]) || 
    (this.boardState[3] == this.boardState[4] && this.boardState[4] == this.boardState[5]) ||
    (this.boardState[6] == this.boardState[7] && this.boardState[7] == this.boardState[8]) ||
    (this.boardState[0] == this.boardState[3] && this.boardState[0] == this.boardState[6]) ||
    (this.boardState[1] == this.boardState[4] && this.boardState[1] == this.boardState[7]) ||
    (this.boardState[2] == this.boardState[5] && this.boardState[2] == this.boardState[8]) ||
    (this.boardState[0] == this.boardState[4] && this.boardState[0] == this.boardState[8]) ||
    (this.boardState[2] == this.boardState[4] && this.boardState[2] == this.boardState[6])
    ) {
      console.log('SOMEBODY WINNNNNNSNSSSSSS, dunno who ha! Well it is player.');
    }

    if ((ancCheck == this.boardState[1] && ancCheck == this.boardState[2]) ||
      (ancCheck == this.boardState[3] && ancCheckc == this.boardState[6]) ||
      (ancCheck == this.boardState[4] && ancCheck == this.boardState[8])
    ) {
      console.log('WINNERE');
    }
      

    (this.boardState[0] == this.boardState[1] and this.boardState [0] == this.boardState[2])

    const numbers = [1, 2, 3, 4, 5];

    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

    const boardValue = [0,1,2,3,4,5,6,7,8].reduce((totalvalue, position) => {
      if (this.boardState[position] != null) {
        return totalvalue + 1;
      } else {
        return totalvalue;
      }
    });

    console.log('Boardvalue: ', boardValue);

    if ()

    // if (this.boardState.forEach((x, i) => {
    //   if (i % 3 == 0) {
    //     if (x == 'X' && this.boardState[i + 1] == 'X' && this.boardState[i + 2] == 'X') { return true }
    //   })
  }
}
