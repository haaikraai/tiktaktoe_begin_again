import { Component, Input } from '@angular/core';
import { GameStateService, XO } from '../game-state.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})

export class SquareComponent {

  @Input() value: XO = null;

  constructor(private gameState: GameStateService) { }

  ngOnInit() {
  }

  onClickSquare(event: Event) {
    // if (this.value === null) {
    //   this.gameState.makemove(this.gameState.boardState.indexOf(null));
    // }
    console.log(event)
    if (this.value == null) {
      this.gameState.makeMove(2);
    }
  }

}
