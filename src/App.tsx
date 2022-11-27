import './app.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppState } from './AppState';
import { GameGridComp } from './game-grid-comp/GameGridComp';
import { OverseerComp } from './overseer-comp/OverseerComp';
import { PlayerComp } from './player-comp/PlayerComp';

interface AppProps {
  appState: AppState;
}

export const App: React.FC<AppProps> = observer(({ appState }) => {
  return (
    <div className='app'>
      <OverseerComp appState={appState} />
      <div className='grid-container'>
        <GameGridComp appState={appState} />
        <PlayerComp appState={appState} />
      </div>
    </div>
  );
});
