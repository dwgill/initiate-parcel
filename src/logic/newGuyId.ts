const newGuyId = (): NonNullable<string> => {
    const randomNum = Math.random()
        .toString(36)
        .substr(2);

    return `guy_${randomNum}`;
};

export default newGuyId;
