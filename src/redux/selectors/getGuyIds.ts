import { RootState, GuyId, allGuyProps } from '~redux/types';

const checkPropDictsMirrorIds = (state: RootState): void => {
    const idSet = new Set(Object.keys(state.init));
    for (const guyProp of allGuyProps) {
        for (const otherId of Object.keys(state[guyProp])) {
            if (!idSet.has(otherId)) {
                throw Error(
                    `Found ID '${otherId}' in prop dict '${guyProp}' which wasn't found in the init dict.`,
                );
            }
        }
    }
};

const getGuyIds = (state: RootState): GuyId[] => {
    const guyIds: GuyId[] = Object.keys(state.init);

    if (process.env.NODE_ENV === 'development') {
        checkPropDictsMirrorIds(state);
    }

    return guyIds;
};

export default getGuyIds;
