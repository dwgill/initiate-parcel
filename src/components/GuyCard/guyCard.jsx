import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import getPartialGuy from '~redux/selectors/getPartialGuy';
import getGuyProp from '~redux/selectors/getGuyProp';
import useGuy from '~hooks/useGuy';

const GuyCard = ({ id }) => {
    const {
        init: [init, setInit],
        ac: [ac, setAc],
        hp: [hp, setHp],
        name: [name, setName],
        bias: [bias, setBias],
        note: [note, setNote],
    } = useGuy(id);

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
