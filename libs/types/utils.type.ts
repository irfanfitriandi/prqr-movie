export type MergeTypes<T, R> = Omit<T, keyof R> & R
