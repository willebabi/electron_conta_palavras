const fs = require('fs')

module.exports = paths => {
    return new Promise((resolve, reject) => {
        try {
            const rows = paths.map(p => fs.readFileSync(p).toString('utf-8'))
                .reduce((txt, txtfile) => `${txt}\n${txtfile}`)
                .split('\n')
            resolve(rows)
        } catch (e) {
            reject(e)
        }
    })
}