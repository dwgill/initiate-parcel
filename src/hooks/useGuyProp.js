import { useSelector, useDispatch } from 'react-redux';
import getGuyProp from '~redux/selectors/getGuyProp';
import { useCallback } from 'react';
import editGuy from '~actions/editGuy';

const makeUseGuyProp = propName => {
    const useGuyProp = guyId => {
        const dispatch = useDispatch();
        const propVal = useSelector(getGuyProp(propName, guyId));
        const setProp = useCallback(
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
