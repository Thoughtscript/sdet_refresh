'use strict'

const {remote} = require('webdriverio')
let browser

const test = () => {
    return new Promise((resolve, reject) => {
        remote({capabilities: {browserName: 'chrome'}}).then(init => {
            browser = init
            console.log("Second Test Group")
            console.log("Gets the title of MDN toppage")
            browser.navigateTo("https://developer.mozilla.org/en-US/").then(response => {
                resolve(console.log(browser.getTitle()))
            })
        })
    })
}

test()