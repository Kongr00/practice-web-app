

export interface NewBoolean{
    sex : 'male' | 'female';
}
export interface DefaultType{
    user: string
    sex: boolean | NewBoolean
}