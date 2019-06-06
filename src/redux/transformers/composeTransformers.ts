import { RootState, Transformer } from '~redux/types';

export const composeTransformers = (
    ...transformers: Transformer[]
): Transformer => (prevState: RootState) => {
    return transformers.reduce(
        (state, transformer) => transformer(state),
        prevState,
    );
};

export default composeTransformers;
