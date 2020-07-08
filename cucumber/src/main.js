'use strict'

class Example {
    constructor() {
        this.str = ""
        this.num = 0
    }

    setNum(num) {
        this.num = num
    }

    setStr(str) {
        this.str = str
    }

    getStr() {
        return this.str
    }

    getNum() {
        return this.num
    }
}

module.exports = Example
