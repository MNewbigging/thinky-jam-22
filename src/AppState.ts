import { action, makeObservable, observable } from 'mobx';

import { GameGrid, GridPosition } from './GameGrid';

export enum PlayerMove {
  UP = 'move-up',
  RIGHT = 'move-right',
  DOWN = 'move-down',
  LEFT = 'move-left',
  NONE = 'move-none',
}

export class AppState {
  grid = new GameGrid({ width: 12, height: 3 });
  playerPosition = new GridPosition(0, 1);
  overseerSequence: number[] = [];
  playerMoves: PlayerMove[] = [];

  constructor() {
    makeObservable(this, {
      playerPosition: observable,
      overseerSequence: observable,
      generateOverseerSequence: action,
      playerMoves: observable,
      setupTurn: action,
    });

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
}
