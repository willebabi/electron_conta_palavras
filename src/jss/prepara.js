module.exports = rows => {
    return new Promise((resolve, reject) => {
        try {
            const palavras = rows.filter(filtervalido)
                .map(removePontuacao)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ')
                .map(p => p.toLowerCase())
                .map(p => p.replace('"', ''))
            resolve(palavras)
        } catch (e) {
            reject(e)
        }
    })
}

function filtervalido(row) {
    const naonr = !parseInt(row.trim())
    const naovazia = !!row.trim()
    const naointerv = !row.includes('-->')
    return naonr && naovazia && naointerv
}

const removePontuacao = row => row.replace(/[,?!.-]/g, '')
const removeTags = row => row.replace(/(<[^>]+)/ig, '').trim()
const mergeRows = (text, row) => `${text} ${row}`