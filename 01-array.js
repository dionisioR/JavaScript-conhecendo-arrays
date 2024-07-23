const notas = [10, 6.5, 8, 7.5]

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4
console.log(media)

media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(media)

console.log('----------------------')
// não é comum e deve ser evitado
const lista = [10, 'oi', true, [1, 2], {a:'B'}]
console.log(lista)