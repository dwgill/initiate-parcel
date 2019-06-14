import { allGuyProps, Guy, RootState } from '~redux/types';
import getGuyProp from './getGuyProp';

const getPartialGuy = (id: string) => (state: RootState): Partial<Guy> => {
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
