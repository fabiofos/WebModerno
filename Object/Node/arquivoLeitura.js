const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8', (err, cont) => {
    const config = JSON.parse(cont)
    console.log(`${config.db.host}:${config.db.port}`)

})

const configu = require('./arquivo.json')
console.log(configu)

fs.readdir(__dirname, (err, arq) => {
    console.log(arq)
})