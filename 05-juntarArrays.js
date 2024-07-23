const salaJS = ["Anna", "Maria", "Joana"]
const salaCSharp = ["João", "Paulo", "Rodrigo"]

const salasSpread = [...salaJS, ...salaCSharp]
const salasConcat = salaJS.concat(salaCSharp)

console.log(salasSpread)
console.log(salasConcat)