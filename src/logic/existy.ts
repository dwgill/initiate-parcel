function existy<V> (value: V): value is NonNullable<V> {
    return value != null;
}

export default existy;