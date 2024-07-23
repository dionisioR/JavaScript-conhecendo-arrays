const nomes = ['Ana', 'Marcos', 'Maria', "Mauro"]
const medias = [7, 4.5, 8, 7.5]

// filtrando nomes com menos de três caracters
const nomesPequenos = nomes.filter(
    (nome) => nome.length < 4
)

console.log(nomes)
console.log(nomesPequenos)
console.log('-----------------')

// filtrando notas menores que 7
const reprovados = nomes.filter(
    (nome, indice) => medias[indice] < 7
)
console.log(reprovados)