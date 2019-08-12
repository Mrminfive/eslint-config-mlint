interface Tss {
    name: string
}

interface Ddd {
    name: string
}

interface PlandObject<T = any> {
    name: T
}

const a = 1

function thisIsMyFunction(
    arr1: number,
    arr2: string,
    arr3: boolean,
    arr4: any
) {}

class MyClass {
    public name: string

    private _age = 'xx'

    constructor() {
        this.name = 'minfive'
    }
}
