const nums = [1,2,3,4,5]
let results = nums.map(function(valor){
    return valor*2
})

console.log(results)

const soma10 = e => e + 10
const triple = e => e * 3
const padaDinheiro = e => `r$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

results = nums.map(soma10).map(triple).map(padaDinheiro)
console.log(results)