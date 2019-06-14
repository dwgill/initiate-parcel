import { GuyProp, GuyPropVal, RootState } from '~redux/types';

const getGuyProp = <P extends GuyProp>(prop: P, id: string) => (
    state: RootState,
): GuyPropVal<P> => {
    return state.guyProperties[prop][id] as any;
};

export default getGuyProp;
