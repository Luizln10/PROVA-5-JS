let tarefas = []

while (true) {
    let acao = prompt("Escolha uma ação: adicionar, listar, remover, concluir, sair").toLowerCase()

    if (acao === "sair") break

    if (acao === "adicionar") {
        let tarefa = prompt("Digite a tarefa a adicionar:")
        tarefas.push(tarefa)
    } else if (acao === "listar") {
        for (let i = 0; i < tarefas.length; i++) {
            console.log(`${i}: ${tarefas[i]}`)
        }
    } else if (acao === "remover") {
        let indice = parseInt(prompt("Digite o índice da tarefa a remover:"))
        if (indice >= 0 && indice < tarefas.length) {
            tarefas.splice(indice, 1)
        } else {
            alert("Índice inválido.")
        }
    } else if (acao === "concluir") {
        let indice = parseInt(prompt("Digite o índice da tarefa a concluir:"))
        if (indice >= 0 && indice < tarefas.length) {
            tarefas[indice] = " " + tarefas[indice]
        } else {
            alert("Índice inválido.")
        }
    } else {
        alert("Ação inválida.")
    }
}
