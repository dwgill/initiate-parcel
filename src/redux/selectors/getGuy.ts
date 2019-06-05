import { State, initialState, Guy, GuyId } from '~redux/types';
import getGuyProp from './getGuyProp';

const guyIsNotPartial = (guy: Partial<Guy>): guy is Guy => {
    return Object.values(guy).every(val => val !== undefined);
}

const getGuy = (id: GuyId) => (state: State): Guy | undefined => {
    const allProps = Object.keys(initialState) as [keyof State];
    const emptyGuy: Partial<Guy> = {};

    const guy = allProps.reduce((guy, prop) => ({
        ...guy,
        [prop]: getGuyProp(prop, id)(state),
    }), emptyGuy);

    if (guyIsNotPartial(guy)) {
        return guy;
    }

    return undefined;
}

export default getGuy;