'use strict'

const Example = require('../../src/main')
const { Given, When, Then } = require('cucumber')

Given('A copy of Example', function () {
    this.copy = new Example()
    return this.copy != null
})

When('Default str set', function () {
    return this.copy.str === ''
})


Then('Set a str', function () {
    this.copy.str = "Hello"
    return this.copy.str === "Hello"
})


When('Default num set', function () {
    return this.copy.num === 0
})

Then('Set a num', function () {
    this.copy.num = 100
    return this.copy.num === 100
})