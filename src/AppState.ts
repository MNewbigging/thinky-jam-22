import { action, makeObservable, observable } from 'mobx';

import { GameGrid, GridPosition } from './GameGrid';

export class AppState {
  grid = new GameGrid({ width: 12, height: 3 });
  playerPosition = new GridPosition(0, 0);

  constructor() {
    makeObservable(this, {
      playerPosition: observable,
    });
  }
}
