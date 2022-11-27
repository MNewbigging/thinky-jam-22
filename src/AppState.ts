import { action, computed, makeObservable, observable } from 'mobx';

import { GameGrid, GridPosition } from './GameGrid';
import { KeyboardListener } from './KeyboardListener';

export enum PlayerMove {
  UP = '⇧',
  RIGHT = '⇨',
  DOWN = '⇩',
  LEFT = '⇦',
  NONE = '🚫',
  EMPTY = '',
}

export enum GamePhase {
  PLAN = 'plan',
  ACTION = 'action',
}

export class AppState {
  grid = new GameGrid({ width: 12, height: 3 });
  playerPosition = new GridPosition(0, 1);
  overseerSequence: number[] = [];
  playerMoves: PlayerMove[] = [];
  focusedMoveCell: number | undefined = undefined;
  gamePhase: GamePhase | undefined = undefined;

  private keyboardListener = new KeyboardListener();

  constructor() {
    makeObservable(this, {
      playerPosition: observable,
      overseerSequence: observable,
      generateOverseerSequence: action,
      playerMoves: observable,
      planPhase: action,
      focusMoveCell: action,
      focusedMoveCell: observable,
      selectMove: action,
      gamePhase: observable,
      canTakeAction: computed,
    });

    this.keyboardListener.on('escape', this.onEscape);
  }

  get canTakeAction() {
    if (!this.playerMoves.length) {
      return false;
    }

    const can = this.playerMoves.every((move) => move !== PlayerMove.EMPTY);

    console.log('can', can);

    return can;
  }

  newGame() {
    this.playerPosition = new GridPosition(0, 1);

    this.planPhase();
  }

  planPhase() {
    // Get a new overseer number sequence
    this.generateOverseerSequence();

    // Clear player moves
    this.resetPlayerMoves();
  }

  generateOverseerSequence() {
    this.overseerSequence = [];

    for (let i = 0; i < 5; i++) {
      const num = Math.floor(Math.random() * 5);
      this.overseerSequence.push(num);
    }
  }

  resetPlayerMoves() {
    this.playerMoves = [
      PlayerMove.EMPTY,
      PlayerMove.EMPTY,
      PlayerMove.EMPTY,
      PlayerMove.EMPTY,
      PlayerMove.EMPTY,
    ];
  }

  focusMoveCell(cellIndex: number) {
    this.focusedMoveCell = cellIndex;
    console.log('focus move cell', cellIndex);
  }

  onEscape = () => {
    this.focusedMoveCell = undefined;
  };

  selectMove(move: PlayerMove) {
    if (this.focusedMoveCell === undefined) {
      return;
    }

    this.playerMoves[this.focusedMoveCell] = move;
  }
}
