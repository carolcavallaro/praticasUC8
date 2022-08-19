let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
if (quantidadeDeEstudantes < 3) {
	listaDeEstudantes.push("José");
    listaDeEstudantes.push("João");
	console.log(listaDeEstudantes);
} else {
	console.log("Não é possível inserir mais alunos nessa turma");
}
console.log(listaDeEstudantes);