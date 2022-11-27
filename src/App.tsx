import './app.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppState } from './AppState';
import { GameGridComp } from './game-grid-comp/GameGridComp';

interface AppProps {
  appState: AppState;
}

export const App: React.FC<AppProps> = observer(({ appState }) => {
  return (
    <div className='app'>
      <GameGridComp appState={appState} />
    </div>
  );
});
