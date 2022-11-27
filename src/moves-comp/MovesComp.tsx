import './moves-comp.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppState } from '../AppState';

export interface MovesCompProps {
  appState: AppState;
}

export const MovesComp: React.FC<MovesCompProps> = observer(({ appState }) => {
  return (
    <div className='moves-comp'>
      <div>Moves:</div>
      <div className='moves-grid'>
        <div className='moves-grid-cell'></div>
        <div className='moves-grid-cell'></div>
        <div className='moves-grid-cell'></div>
        <div className='moves-grid-cell'></div>
        <div className='moves-grid-cell'></div>
      </div>
    </div>
  );
});
