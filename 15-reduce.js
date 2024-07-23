const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(arrayListaDeNotas){
    const somaDasNotas = arrayListaDeNotas.reduce(
        (acumulador, notas) => {return acumulador + notas}, 0
    )
    const media = somaDasNotas / arrayListaDeNotas.length;
    return media;
}

console.log(`Média da sala de JavaScript: ${calculaMedia(salaJS)}`);
console.log(`Média da sala de Java: ${calculaMedia(salaJava)}`);
console.log(`Média da sala de Python: ${calculaMedia(salaPython)}`);