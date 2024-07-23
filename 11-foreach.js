const listaNotas = [10, 8, 8.5, 5, 6.5, 8, 7.5]
let soma = 0
listaNotas.forEach(nota => {
    soma += nota
});
console.log(`Média: ${(soma / listaNotas.length).toFixed(2)}`)

console.log('----------------------')


let soma2 = 0
const somaNotas = (notas) => {
    soma2 += notas
}

listaNotas.forEach(somaNotas)

console.log(soma2)
console.log(`Média: ${(soma2 / listaNotas.length).toFixed(2)}`)
