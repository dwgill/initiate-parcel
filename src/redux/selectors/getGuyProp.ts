import { RootState, initialState, GuyProp, GuyPropVal } from '~redux/types';
import existy from '~logic/existy';

type GetGuyProp = <P extends GuyProp>(
    prop: P,
    id: string,
) => (state: RootState) => GuyPropVal<P> | undefined;

const getGuyProp: GetGuyProp = (prop, id) => (prevState = initialState) => {
    const propDict = prevState[prop];
    if (!existy(propDict)) {
        return undefined;
    }

    return propDict[id];
};

export default getGuyProp;
