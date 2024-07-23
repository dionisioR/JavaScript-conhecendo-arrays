const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 8, 7.5, 9]
const lista = [alunos, medias]

function exibeNomeENota(aluno){
    if(lista[0].includes(aluno)){
        let indice = lista[0].indexOf(aluno)
        return lista[0][indice] + ', sua média é ' + lista[1][indice]
    } else {
        return 'Aluno não está cadastrado'
    }
}

console.log(exibeNomeENota('Juliana'))
console.log(exibeNomeENota('João'))
console.log(exibeNomeENota('Caio'))
console.log(exibeNomeENota('Ana'))
console.log(exibeNomeENota('NaoTem'))