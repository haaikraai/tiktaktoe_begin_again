import { Component } from '@angular/core';
import { GameStateService, XO } from '../game-state.service';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  public player: XO = 'X';
  public boardState = this.gameState.boardState;
  
  get squares(): XO[] { 
    return this.gameState.boardState;
  }
  set squares(values: XO[]) {
    console.log('i was here setting the squares in stupid board component even checking the winner???')
    this.gameState.boardState = values;
    this.gameState.checkWinner();
  }

  constructor(private gameState: GameStateService) {
  }

  ngOnInit() {
    this.squares = this.gameState.boardState;
    console.log(this.squares)
    this.player = this.gameState.player;
  }
}
