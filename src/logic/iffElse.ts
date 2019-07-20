type Fn<A, R> = (arg: A) => R;

type IffElse = (
    pred: boolean,
) => <A, R>(trueFn: Fn<A, R>) => (falseFn: Fn<A, R>) => Fn<A, R>;

const iffElse: IffElse = pred => trueFn => falseFn => (pred ? trueFn : falseFn);

export default iffElse;
