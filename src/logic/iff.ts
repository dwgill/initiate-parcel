import identity from './identity';

type Iff = (pred: boolean) => <V>(func: (arg: V) => V) => (arg: V) => V;

const iff: Iff = pred => func => (pred ? func : identity);

export default iff;
