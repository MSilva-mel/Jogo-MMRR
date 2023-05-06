
let matriz = [];

//funcao para criar um elemento
function criaTag(elemento) {
    return document.createElement(elemento);
}

let tabela = document.getElementById("tabela");

let tbody = criaTag("tbody");

tabela.appendChild(tbody);

// Loop para criar as linhas
for(let linha = 0; linha < 16; linha++) {
    let tr = criaTag("tr");
    tbody.appendChild(tr);
    // Loop para criar as células em cada linha
    for(let coluna = 0; coluna < 16; coluna++){
        let td = criaTag("td");
        if (linha === 15 || linha === 0 || coluna === 0 || coluna == 15) {
            td.textContent = "*";
          } else {
            td.textContent = "";
          }
        tr.appendChild(td);
    }
}


function fecharJanela() {
    window.close();
  }
