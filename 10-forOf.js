const listaNotas = [10, 8, 8.5, 5, 6.5, 8, 7.5]

// forOf - percorre uma coleção pegando seus valores
let soma = 0
for (let nota of listaNotas) {
    soma += nota
}
console.log(`Média: ${(soma / listaNotas.length).toFixed(2)}`)