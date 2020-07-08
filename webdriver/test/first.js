'use strict'

const testEndpointAll = `http://localhost:8888/api`
const testEndpointOne = `http://localhost:8888/api/one?id=3`

const {remote} = require('webdriverio')
let browser

const test = () => {
    return new Promise((resolve, reject) => {
        remote({capabilities: {browserName: 'chrome'}}).then(init => {
            browser = init

            console.log("First Test Group")
            console.log("GET All API Endpoint")
            browser.navigateTo(testEndpointAll).then(testResponseOne => {
                let el = browser.$('html')
                console.log(el)
                //TODO: extract JSON
                setTimeout(() => {
                    console.log("GET One API Endpoint")
                    browser.navigateTo(testEndpointOne).then(testResponseTwo => {
                        let el = browser.$('html')
                        console.log(el)
                        //TODO: extract JSON
                    })
                }, 1000)
            })
        })
    })
}

test()