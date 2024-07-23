const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"]
// excluindo os elementos repetidos
const novoNomes = new Set(nomes)  // Set - retorna um objeto com os elementos
console.log(novoNomes)

// convertendo em um array
const arrayNomes = [... novoNomes]
console.log(arrayNomes)

// Poderia ser feito desta maneira
const nomesUnicos = [...new Set(nomes)]
console.log(nomesUnicos)
