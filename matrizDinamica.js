
let matriz = [];

//funcao para criar um elemento
function criaTag(elemento) {
    return document.createElement(elemento);
}

let tabela = document.getElementById("tabela");

let tbody = criaTag("tbody");

tabela.appendChild(tbody);


for(let linha = 0; linha < 16; linha++) {
    let tr = criaTag("tr");
    tbody.appendChild(tr);
    matriz[linha] = [];
    for(let coluna = 0; coluna < 16; coluna++){
        let td = criaTag("td");
            td.textContent = "%";
            tr.appendChild(td);
            matriz[linha][coluna] = "%";
    }
}


function fecharJanela() {
    window.close();
  }