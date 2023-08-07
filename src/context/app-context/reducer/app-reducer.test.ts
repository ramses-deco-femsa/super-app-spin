import {MOVEMENTS_DATA} from '@sas/__mocks__';

import {appReducer, appInitialState} from './app-reducer';
import {setMovements} from '../actions';

describe('app-reducer', () => {
  it('sets movements', () => {
    const action = setMovements(MOVEMENTS_DATA);

    const newState = appReducer(appInitialState, action);

    expect(newState.movements).toEqual(MOVEMENTS_DATA);
  });
});
