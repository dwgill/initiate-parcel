import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import editGuy from '~actions/editGuy';
import getGuyProp from '~redux/selectors/getGuyProp';
import { GuyProp, GuyPropVal, Guy } from '~redux/types';

type GuyPropSetter<P extends GuyProp> = (newVal: GuyPropVal<P>) => void;

type GuyPropSelectorTuple<P extends GuyProp> = [
    GuyPropVal<P> | undefined,
    GuyPropSetter<P>
];

interface GuyPropHook<P extends GuyProp> {
    (guyId: string): GuyPropSelectorTuple<P>;
}

const makeGuyPropHook = <P extends GuyProp>(propName: P): GuyPropHook<P> => {
    const useGuyProp = (guyId: string): GuyPropSelectorTuple<P> => {
        const dispatch = useDispatch();
        const propVal: GuyPropVal<P> | undefined = useSelector(
            getGuyProp(propName, guyId),
        );
        const setProp: GuyPropSetter<P> = useCallback(
            newVal => dispatch(editGuy(guyId, propName, newVal)),
            [propName, guyId, dispatch],
        );

        return [propVal, setProp];
    };

    return useGuyProp;
};

export const useGuyProp = <P extends GuyProp>(
    prop: P,
    id: string,
): GuyPropSelectorTuple<P> => {
    return makeGuyPropHook(prop)(id);
};

export const useInit = makeGuyPropHook('init');
export const useAc = makeGuyPropHook('ac');
export const useHp = makeGuyPropHook('hp');
export const useName = makeGuyPropHook('name');
export const useNote = makeGuyPropHook('note');
