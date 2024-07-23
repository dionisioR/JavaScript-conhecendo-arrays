const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo', 'Anna'];

console.log(listaEstudantes.length)

// slice = fatiar
const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2)
const sala2 = listaEstudantes.slice(listaEstudantes.length/2)

console.log(`sala 1: ${sala1}`)
console.log(`sala 1 - Quantidade de alunos: ${sala1.length}`)
console.log('-------------------------')

console.log(`sala 2: ${sala2}`)
console.log(`sala 2 - Quantidade de alunos: ${sala2.length}`)
