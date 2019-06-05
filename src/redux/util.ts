import { State, Transformer } from "./types";

export const flowT = (...transformers: Transformer[]): Transformer => (prevState: State) => {
    return transformers.reduce((state, transformer) => transformer(state), prevState);
}