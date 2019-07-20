import identity from './identity';
import iffElse from './iffElse';

const iff = (pred: boolean) => <V>(ifTrue: (arg: V) => V) =>
    iffElse(pred)(ifTrue)(x => x);

export default iff;
