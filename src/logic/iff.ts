import identity from './identity';

type Func<V> = (arg: V) => V;

type Iff = (pred: boolean) => <V>(func: Func<V>) => Func<V>;

const iff: Iff = pred => func => (pred ? func : identity);

export default iff;
