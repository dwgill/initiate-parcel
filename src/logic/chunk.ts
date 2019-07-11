const chunk = <E>(arr: ReadonlyArray<E>): [E, E][] => {
    let output: [E, E][] = [];
    for (let i = 0; i < arr.length; i++) {
        if (i + 1 < arr.length) {
            output.push([arr[i], arr[i + 1]]);
        }
    }

    return output;
};

export default chunk;
