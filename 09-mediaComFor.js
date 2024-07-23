const notas = [10, 8, 8.5, 5, 6.5, 8, 7.5]

let soma = 0
for(let i = 0; i < notas.length; i++){
    soma += notas[i]
}
console.log(`Média: ${(soma / notas.length).toFixed(2)}`)