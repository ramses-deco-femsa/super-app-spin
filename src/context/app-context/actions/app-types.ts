import {MovementsActions, MovementTypes} from './movements';

export type ActionTypes = MovementsActions;

const AllTypes = {
  ...MovementTypes,
};

export const Types = {...AllTypes};
