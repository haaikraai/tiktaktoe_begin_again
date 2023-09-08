import { Component, Input } from '@angular/core';
import { GameStateService, XO } from '../game-state.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})

export class SquareComponent {

  @Input() value: XO = null;
  @Input() position: number = -1;

  constructor(private gameState: GameStateService) { }

  ngOnInit() {
    console.log('Postion: ', this.position);
    console.group('Value: ', this.value);
  }

  onClickSquare(location: number, value: XO) {
    // if (this.value === null) {
    //   this.gameState.makemove(this.gameState.boardState.indexOf(null));
    // }
    console.log('Clicked a: ', value);
    console.log('Location: ', location);

    if (this.value == null) {
      this.gameState.makeMove(location);
    }
  }

}
