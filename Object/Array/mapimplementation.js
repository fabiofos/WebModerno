Array.prototype.map2 = function (callback){
    const newArray = []
    for (let i = 0; i <  this.length; i++)
    {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}
const carrinho = [
    '{"nome": "Borracha", "preco": 3.50}',
    '{"nome": "Caderno", "preco": 13.00}',
    '{"nome": "Kit Lapis", "preco": 1.50}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//retornar array somente com precos
const paraobj = json => JSON.parse(json)
const apenaspreco = produto =>produto.preco

const resultado = carrinho.map2(paraobj).map2(apenaspreco)

console.log(resultado)
