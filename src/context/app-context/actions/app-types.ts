import {BrandEntitiesActions, BrandEntitiesTypes} from './brand-entities';
import {MovementsActions, MovementTypes} from './movements';
import {UserActions, UserTypes} from './user';

export type ActionTypes = MovementsActions | BrandEntitiesActions | UserActions;

const AllTypes = {
  ...MovementTypes,
  ...BrandEntitiesTypes,
  ...UserTypes,
};

export const Types = {...AllTypes};
