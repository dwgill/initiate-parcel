type IffElse = (pred: boolean) => <V>(trueVal: V) => (falseVal: V) => V;

const iffElse: IffElse = pred => trueVal => falseVal =>
    pred ? trueVal : falseVal;

export default iffElse;
