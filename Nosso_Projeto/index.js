let listaAlunos = ["Marlene", "João", "Carolina"];
let qtdeAlunos = listaAlunos.length

listaAlunos.push("Débora");

for (let indice = 0; indice < qtdeAlunos; indice++) {
    const alunoCorrente = listaAlunos [indice];
    console.log(alunoCorrente);
}

if (qtdeAlunos < 5) {
    listaAlunos.push("Maria Clara");
} else if (qtdeAlunos < 5) {
    listaAlunos.push("Diego");
}

console.log(listaAlunos);