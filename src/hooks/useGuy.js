import { useCallback } from 'react';
import getGuyProp from '~redux/selectors/getGuyProp';
import { useSelector, useDispatch } from 'react-redux';
import { create as editGuy } from '~actions/editGuy';

const useGuy = id => {
    const init = useSelector(getGuyProp('init', id));
    const ac = useSelector(getGuyProp('ac', id));
    const bias = useSelector(getGuyProp('bias', id));
    const hp = useSelector(getGuyProp('hp', id));
    const name = useSelector(getGuyProp('name', id));
    const note = useSelector(getGuyProp('note', id));

    const dispatch = useDispatch();

    const setInit = useCallback(
        newVal => dispatch(editGuy(id, 'init', newVal)),
        [id, dispatch],
    );
    const setAc = useCallback(newVal => dispatch(editGuy(id, 'ac', newVal)), [
        id,
        dispatch,
    ]);
    const setBias = useCallback(
        newVal => dispatch(editGuy(id, 'bias', newVal)),
        [id, dispatch],
    );
    const setHp = useCallback(newVal => dispatch(editGuy(id, 'hp', newVal)), [
        id,
        dispatch,
    ]);
    const setName = useCallback(
        newVal => dispatch(editGuy(id, 'name', newVal)),
        [id, dispatch],
    );
    const setNote = useCallback(
        newVal => dispatch(editGuy(id, 'note', newVal)),
        [id, dispatch],
    );

    return {
        init: [init, setInit],
        ac: [ac, setAc],
        hp: [hp, setHp],
        bias: [bias, setBias],
        name: [name, setName],
        note: [note, setNote],
    };
};

export default useGuy;
