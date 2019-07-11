type Iff = (pred: boolean) => <V>(func: (arg: V) => V) => (arg: V) => V;

const iff: Iff = pred => func => (pred ? func : x => x);

export default iff;
