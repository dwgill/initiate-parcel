import React from 'react';
import {
    useAc,
    useBias,
    useHp,
    useInit,
    useName,
    useNote,
} from '~hooks/useGuyProp';

const GuyCard = ({ id }) => {
    const [init, setInit] = useInit(id);
    const [ac, setAc] = useAc(id);
    const [hp, setHp] = useHp(id);
    const [name, setName] = useName(id);
    const [bias, setBias] = useBias(id);
    const [note, setNote] = useNote(id);

    return (
        <div>
            <p>init: {init}</p>
            <p>ac: {ac}</p>
            <p>hp: {hp}</p>
            <p>name: {name}</p>
            <p>bias: {bias}</p>
            <p>note: {note}</p>
        </div>
    );
};

export default GuyCard;
