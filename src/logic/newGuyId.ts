const newGuyId = (): NonNullable<string> => new Date().toISOString();

export default newGuyId;
