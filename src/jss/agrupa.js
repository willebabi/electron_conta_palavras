module.exports = pls => {
    return new Promise((resolve, reject) => {
        try {
            const grupo = pls.reduce((obj, pl) => {
                if (obj[pl]) {
                    obj[pl] += 1
                } else {
                    obj[pl] = 1
                }
                return obj
            }, {})
            const grupoArray = Object.keys(grupo)
                .map(key => ({ nome: key, count: grupo[key] }))
                .sort((w1, w2) => w2.count - w1.count)
            resolve(grupoArray)
        } catch (e) {
            reject(e)
        }
    })
}