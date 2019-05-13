const contA = require('./instanciaUnica')
const contB = require('./instanciaUnica')

const contC = require('./instanciaNova')()
const contD = require('./instanciaNova')()

contA.inc()
contA.inc()
console.log(contB.valor)
