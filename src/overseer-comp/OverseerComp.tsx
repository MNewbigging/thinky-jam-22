import './overseer-comp.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppState } from '../AppState';

export interface OverseerCompProps {
  appState: AppState;
}

export const OverseerComp: React.FC<OverseerCompProps> = observer(({ appState }) => {
  return (
    <div className='overseer-comp'>
      <div>Overseer: Idle</div>

      <div className='sequence-container'>
        <div>Sequence:</div>
        <div className='sequence-grid'>
          {appState.overseerSequence.map((seqNo) => (
            <div className='sequence-grid-cell'>{seqNo}</div>
          ))}
        </div>
      </div>
    </div>
  );
});
