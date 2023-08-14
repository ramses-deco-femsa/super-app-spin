import {BrandEntitiesActions, BrandEntitiesTypes} from './brand-entities';
import {UserActions, UserTypes} from './user';

export type ActionTypes = UserActions | BrandEntitiesActions;

const AllTypes = {
  ...UserTypes,
  ...BrandEntitiesTypes,
};

export const Types = {...AllTypes};
