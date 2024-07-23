const nomes = ['ana  ', 'maria', 'joÃo', '   BIA', 'BIA Silva', 'MarcoS']

console.log(nomes)

const nomesAtualizados = nomes.map(
    nome => nome.toUpperCase().trim()
)

console.log(nomesAtualizados)