import * as deleteGuy from './deleteGuy';
import * as editGuy from './editGuy';
import * as newGuy from './newGuy';

export type ActionCreatorMap = {
    [deleteGuy.type]: typeof deleteGuy.create;
    [newGuy.type]: typeof newGuy.create;
    [editGuy.type]: typeof editGuy.create;
};

export type ActionType = keyof ActionCreatorMap;
export type ActionCreator = ActionCreatorMap[ActionType];
export type Action = ReturnType<ActionCreator>;
export type ActionCreatorForType<A extends ActionType> = ActionCreatorMap[A];
export type ActionForType<A extends ActionType> = ReturnType<
    ActionCreatorForType<A>
>;
