import { allGuyProps, Guy, GuyId, RootState } from '~redux/types';
import getGuyProp from './getGuyProp';

const getPartialGuy = (id: GuyId) => (state: RootState): Partial<Guy> => {
    const emptyGuy: Partial<Guy> = {};

    const guy = allGuyProps.reduce(
        (guy, prop) => ({
            ...guy,
            [prop]: getGuyProp(prop, id)(state),
        }),
        emptyGuy,
    );

    return guy;
};

export default getPartialGuy;
