const { ipcMain } = require('electron')
const paths = require('./lerarqs')
const prepara = require('./prepara')
const grupo = require('./agrupa')
ipcMain.on('comunica', (e, a) => {
    //console.log('ipcMain', a);
    paths(a).then(rows => prepara(rows))
        .then((p) => grupo(p))
        .then((ps) => e.reply('comunica', ps))
})