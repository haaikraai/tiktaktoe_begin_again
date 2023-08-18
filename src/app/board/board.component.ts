import { Component } from '@angular/core';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  get squares(): XO[][] { 
    return this.gameState.boardState;
  }

  constructor(private gameState: GameStateService) {
  }

  ngOnInit() {

  }
}
