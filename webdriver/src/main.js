'use strict'

'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Core HTTP logic.
 */

const createHttpServer = (port) => {
    const s = require('http').createServer((req, res) => {
        const uri = require('url').parse(req.url).pathname
        require('./api').createApi(uri, req, res)
    })

    console.info(`HTTP initialized!`)
    console.info(`REST API initialized!`)

    s.on('clientError', (err, sck) => {
        const e = `HTTP/1.1 400 Bad Request! ${err}`
        console.error(e)
        sck.end(e)
    })

    s.listen(port, () => console.info(`HTTP server started on port: ${s.address().port}`))
    return s
}

createHttpServer(8888)
