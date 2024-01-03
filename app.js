const listaContatos = [];

function adicionarContato() {
    const nomeInput = document.getElementById('nome');
    const telefoneInput = document.getElementById('telefone');

    const nome = nomeInput.value;
    const telefone = telefoneInput.value;

    if (nome && telefone) {
        listaContatos.push({ nome, telefone });
        nomeInput.value = '';
        telefoneInput.value = '';

    
    exibirContatos();
    } 
    else {
    alert('Nome e número de telefone são obrigatórios.');
    }
}

function exibirContatos() {
    const corpoTabelaContatos = document.getElementById('corpoTabelaContatos');
    corpoTabelaContatos.innerHTML = '';

    for (const contato of listaContatos) {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `<td>${contato.nome}</td><td>${contato.telefone}</td>`;
    
        const colunaAcao = document.createElement('td');
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', () => removerContato(contato.telefone));
        colunaAcao.appendChild(botaoRemover);

        novaLinha.appendChild(colunaAcao);
        corpoTabelaContatos.appendChild(novaLinha);
    }
}

function removerContato(telefone) {
    const index = listaContatos.findIndex(contato => contato.telefone === telefone);
        if (index !== -1) {
        listaContatos.splice(index, 1);
        exibirContatos(); 
    }
}