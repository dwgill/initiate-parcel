import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import editGuy from '~actions/editGuy';
import getGuyProp from '~redux/selectors/getGuyProp';
import { GuyId, GuyProp, GuyPropVal } from '~redux/types';

type GuyPropSetter<P extends GuyProp> = (newVal: GuyPropVal<P>) => void;

type GuyPropSelectorTuple<P extends GuyProp> = [
    GuyPropVal<P> | undefined,
    GuyPropSetter<P>
];

interface GuyPropSelector<P extends GuyProp> {
    (guyId: GuyId): GuyPropSelectorTuple<P>;
}

const makeUseGuyProp = <P extends GuyProp>(propName: P): GuyPropSelector<P> => {
    const useGuyProp = (
        guyId: GuyId,
    ): GuyPropSelectorTuple<typeof propName> => {
        const dispatch = useDispatch();
        const propVal: GuyPropVal<typeof propName> | undefined = useSelector(
            getGuyProp(propName, guyId),
        );
        const setProp: GuyPropSetter<typeof propName> = useCallback(
            newVal => dispatch(editGuy(guyId, propName, newVal)),
            [propName, guyId, dispatch],
        );

        return [propVal, setProp];
    };

    return useGuyProp;
};

export const useInit = makeUseGuyProp('init');
export const useAc = makeUseGuyProp('ac');
export const useHp = makeUseGuyProp('hp');
export const useName = makeUseGuyProp('name');
export const useNote = makeUseGuyProp('note');
export const useBias = makeUseGuyProp('bias');
