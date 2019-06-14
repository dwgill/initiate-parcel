import { Transformer } from '~redux/types';

type ComposeTrans = (...transformers: Transformer[]) => Transformer;

export const flowTransformers: ComposeTrans = (...trans) => prevState => {
    return trans.reduce((state, tformer) => tformer(state), prevState);
};

export default flowTransformers;
