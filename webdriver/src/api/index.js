'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Simple API - no error handling - for demonstration purposes only!
 */

const R = require('./constants').API_ROUTES,
    DATA = require('../data'),
    U = require('url'),
    Q = require('querystring')

module.exports = {
    createApi: async (url, req, res) => {
        if (R.indexOf(url) !== -1) {

            console.info(`${req.connection.remoteAddress} connected to REST API!`)
            let reponseData
            res.setHeader('Content-type', 'application/json')

            if (url === R[0] || url === R[1]) {
                switch (req.method) {

                    //READ ALL
                    case ('GET'):
                        reponseData = await DATA
                        res.write(JSON.stringify({status: 200, data: reponseData}))
                        break

                    //DELETE
                    case ('DELETE'):
                        const id = Q.parse(U.parse(req.url).query)['id']
                        delete DATA[id]
                        reponseData = await DATA
                        res.write(JSON.stringify({status: 200, data: reponseData}))
                        break

                    //UPDATE
                    case ('PUT'):
                        return await new Promise((resolve, reject) => {
                            let bodyData = ''
                            req.on('data', postData => {bodyData += postData})
                            req.on('end', end => resolve(bodyData))
                        }).then(body => {
                            const contact = JSON.parse(body).contact
                            DATA[contact['id']] = contact
                            res.write(JSON.stringify({status: 200, data: DATA}))
                            res.end()
                        })

                    //CREATE
                    case ('POST'):
                        return await new Promise((resolve, reject) => {
                            let bodyData = ''
                            req.on('data', postData => {bodyData += postData})
                            req.on('end', end => resolve(bodyData))
                        }).then(body => {
                            const contact = JSON.parse(body).contact
                            DATA[contact['id']] = contact
                            res.write(JSON.stringify({status: 200, data: DATA}))
                            res.end()
                        })

                    //READ ALL
                    default:
                        reponseData = await DATA
                        res.write(JSON.stringify({status: 200, data: reponseData}))
                        break
                }

            } else if (url === R[2] || url === R[3]) {
                //GET ONE
                const id = Q.parse(U.parse(req.url).query)['id']
                reponseData = await DATA[id]
                res.write(JSON.stringify({status: 200, data: reponseData}))
            }

            res.statusCode = 200
            res.end()
        }
    }
}