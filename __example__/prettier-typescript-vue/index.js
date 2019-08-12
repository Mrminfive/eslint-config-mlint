export default class Test {
    static name = 'minfive'

    constructor(
        arr1,
        arr2,
        arr3,
        arr4,
        arr5,
        arr6,
        arr7,
        arr8,
        arr9,
        arr10,
        arr11,
        arr12,
        arr13,
        arr14
    ) {
        this.name = 'minfive2'
        this.status = (1 && 2 && 3) || (5 && 6)
    }

    method() {
        console.log(this.name)
    }
}
