    const nome = document.getElementById('nome').value;
    const numero = document.getElementById('numero').value;

    function salvar() {
    document.getElementById('nome-salvo').innerHTML = `<td>${nome}</td>`;
    document.getElementById('numero-salvo').innerHTML = `<td>${numero}</td>`;

}
