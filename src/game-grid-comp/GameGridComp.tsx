import './game-grid-comp.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppState } from '../AppState';
import { GameGrid } from '../GameGrid';

export interface GameGridCompProps {
  appState: AppState;
}

export const GameGridComp: React.FC<GameGridCompProps> = observer(({ appState }) => {
  const cells: JSX.Element[] = [];

  appState.grid.cells.forEach((row, rowIdx) =>
    row.forEach((cell, cellIdx) => {
      // Set css classes based on cell props
      const coverClass = cell.cover ? 'cover' : '';
      const classes = ['game-grid-cell', coverClass];

      cells.push(
        <div key={`${rowIdx}-row-${cellIdx}-cell`} className={classes.join(' ')}>
          {}
        </div>
      );
    })
  );

  return (
    <div
      className={'game-grid'}
      style={{
        gridTemplateColumns: `repeat(${appState.grid.width}, auto)`,
        gridTemplateRows: `repeat(${appState.grid.height}, auto)`,
      }}
    >
      {cells}
    </div>
  );
});
