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

class MyClass {
    public name: string

    private _age = 'xx'

    constructor() {
        this.name = 'minfive'
    }
}
