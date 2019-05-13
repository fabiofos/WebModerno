const carrinho = [
    '{"nome": "Borracha", "preco": 3.50}',
    '{"nome": "Caderno", "preco": 13.00}',
    '{"nome": "Kit Lapis", "preco": 1.50}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//retornar array somente com precos
const paraobj = json => JSON.parse(json)
const apenaspreco = produto =>produto.preco

const resultado = carrinho.map(paraobj).map(apenaspreco)

console.log(resultado)
