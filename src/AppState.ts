import { action, makeObservable, observable } from 'mobx';

import { GameGrid, GridPosition } from './GameGrid';

export class AppState {
  grid = new GameGrid({ width: 12, height: 3 });
  playerPosition = new GridPosition(0, 1);
  overseerSequence: number[] = [2, 3, 1, 3, 1];

  constructor() {
    makeObservable(this, {
      playerPosition: observable,
    });
  }
}
