import { RootState, GuyId, allGuyProps } from '~redux/types';

const checkPropDictsMirrorIds = (state: RootState): void => {
    const idSet = new Set(state.guyOrdering);
    for (const guyProp of allGuyProps) {
        const otherIdSet = new Set(Object.keys(state.guyProperties[guyProp]));
        for (const otherId of otherIdSet) {
            if (!idSet.has(otherId)) {
                throw Error(
                    `Found ID '${otherId}' in prop dict '${guyProp}' which wasn't found in the initiative order.`,
                );
            }
        }

        for (const id of idSet) {
            if (!otherIdSet.has(id)) {
                throw Error(
                    `Found ID '${id}' in initiative order that wasn't found in prop dict '${guyProp}'.`,
                );
            }
        }
    }
};

const getInitiativeOrder = (state: RootState): ReadonlyArray<GuyId> => {
    const guyIds = state.guyOrdering;

    if (process.env.NODE_ENV === 'development') {
        checkPropDictsMirrorIds(state);
    }

    return guyIds;
};

export default getInitiativeOrder;
