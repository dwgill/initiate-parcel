import existy from '~logic/existy';
import { GuyProp, GuyPropKey, GuyPropVal, RootState } from '~redux/types';

const getGuyProp = <P extends GuyProp>(prop: P, id: GuyPropKey<P>) => (
    state: RootState,
): GuyPropVal<P> | undefined => {
    const propDict = state.guyProperties[prop];
    if (!existy(propDict)) {
        return undefined;
    }

    return propDict[id];
};

export default getGuyProp;
