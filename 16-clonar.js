const notas = [7, 7, 8, 9]
const novaListaNotas = notas // desta maneira temos uma referência, ou seja, o que fizermos um novaListaNotas será replicado em notas e vice versa

console.log(notas)
console.log(novaListaNotas)
console.log('---------------')

novaListaNotas.push(8)

console.log(notas)
console.log(novaListaNotas)
console.log('---------------')

// para evitar este problemas devemos utilizar o spread operator
const novaListaNotasSpread = [...notas] // cria uma cópia do array

console.log(notas)
console.log(novaListaNotas)
console.log(novaListaNotasSpread)
console.log('---------------')

novaListaNotasSpread.push(-55)
console.log(notas)
console.log(novaListaNotas)
console.log(novaListaNotasSpread)