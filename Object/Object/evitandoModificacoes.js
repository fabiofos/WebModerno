//object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'teste', preco: 1234, tag: 'promocao'
})
console.log(Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao='nova'
delete produto.tag
console.log(produto)

//Object.Seal
const pessoa = {nome: 'Julia', idade: 35}
Object.seal(pessoa)
console.log('selado', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 30
console.log(pessoa)