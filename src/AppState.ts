import { action, makeObservable, observable } from 'mobx';

import { GameGrid, GridPosition } from './GameGrid';
import { KeyboardListener } from './KeyboardListener';

export enum PlayerMove {
  UP = '⇧',
  RIGHT = '⇨',
  DOWN = '⇩',
  LEFT = '⇦',
  NONE = '🚫',
}

export class AppState {
  grid = new GameGrid({ width: 12, height: 3 });
  playerPosition = new GridPosition(0, 1);
  overseerSequence: number[] = [];
  playerMoves: PlayerMove[] = [];
  focusedMoveCell: number | undefined = undefined;

  private keyboardListener = new KeyboardListener();

  constructor() {
    makeObservable(this, {
      playerPosition: observable,
      overseerSequence: observable,
      generateOverseerSequence: action,
      playerMoves: observable,
      setupTurn: action,
      focusMoveCell: action,
      focusedMoveCell: observable,
    });

    this.keyboardListener.on('escape', this.onEscape);

    this.setupTurn();
  }

  setupTurn() {
    // Get a new overseer number sequence
    this.generateOverseerSequence();

    // Clear player moves
    this.playerMoves = [];
  }

  generateOverseerSequence() {
    this.overseerSequence = [];

    for (let i = 0; i < 5; i++) {
      const num = Math.floor(Math.random() * 5);
      this.overseerSequence.push(num);
    }
  }

  focusMoveCell(cellIndex: number) {
    this.focusedMoveCell = cellIndex;
    console.log('focus move cell', cellIndex);
  }

  onEscape = () => {
    console.log('onEscape');
  };
}
