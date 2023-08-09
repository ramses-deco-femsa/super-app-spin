import {BrandEntitiesActions, BrandEntitiesTypes} from './brand-entities';
import {MovementsActions, MovementTypes} from './movements';

export type ActionTypes = MovementsActions | BrandEntitiesActions;

const AllTypes = {
  ...MovementTypes,
  ...BrandEntitiesTypes,
};

export const Types = {...AllTypes};
