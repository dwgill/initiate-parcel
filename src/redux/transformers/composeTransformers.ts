import { Transformer } from '~redux/types';

type ComposeTrans = (...transformers: Transformer[]) => Transformer;

export const composeTransformers: ComposeTrans = (...trans) => prevState => {
    return trans.reduce((state, tformer) => tformer(state), prevState);
};

export default composeTransformers;
