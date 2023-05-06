let matriz = [];

//funcao para criar um elemento
function criaTag(elemento) {
    return document.createElement(elemento);
}

let tabela = document.getElementById("tabela");

let tbody = criaTag("tbody");

tabela.appendChild(tbody);

// Loop para criar as linhas
for(let linha = 0; linha < 17; linha++) {
    let tr = criaTag("tr");
    tbody.appendChild(tr);
    // Loop para criar as células em cada linha
    for(let coluna = 0; coluna < 17; coluna++){
        let td = criaTag("td");
        if ((linha === 16 || linha === 0 || coluna === 0 || coluna == 16) || (linha === 2 && coluna != 15) || (linha === 4 && coluna != 1) || (linha === 6 && coluna != 15) || (linha === 8 && coluna != 1) || (linha === 10 && coluna != 15) || (linha === 12 && coluna != 1) || (linha === 14 && coluna != 15)) {
            td.textContent = "*";
          } 
        else if( linha === 1 && coluna === 2) {
            td.textContent = "&" ;
        }
          
        tr.appendChild(td);
    }
}

var posicaoX = 1;
var posicaoY = 1;

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 65:
      esquerda();
      break;
    case 87:
      cima();
      break;
    case 68:
      direita();
      break;
    case 83:
      baixo();
      break;
  }
};

function esquerda() {
  if (posicaoX > 0 && !parede(posicaoX - 1, posicaoY)) {
    setPosition(posicaoX - 1, posicaoY);
  }
}

function cima() {
  if (posicaoY > 0 && !parede(posicaoX, posicaoY - 1)) {
    setPosition(posicaoX, posicaoY - 1);
  }
}

function direita() {
  if (posicaoX < 15 && !parede(posicaoX + 1, posicaoY)) {
    setPosition(posicaoX + 1, posicaoY);
  }
}

function baixo() {
  if (posicaoY < 15 && !parede(posicaoX, posicaoY + 1)) {
    setPosition(posicaoX, posicaoY + 1);
  }
}

function setPosition(x, y) {
  var tabela = document.getElementById("tabela");
  var linhas = tabela.getElementsByTagName("tr");
  
  // Remove o elemento "&" da posição anterior
  var cellAnterior = linhas[posicaoY].getElementsByTagName("td")[posicaoX];
  cellAnterior.classList.remove("&");
  
  // Atualiza a posição do personagem
  posicaoX = x;
  posicaoY = y;
  
  // Adiciona o elemento "&" na nova posição
  var cellNova = linhas[y].getElementsByTagName("td")[x];
  cellNova.classList.add("&");
}
function parede(x, y) {
  var tabela = document.getElementById("tabela");
  var linhas = tabela.getElementsByTagName("tr");
  var cell = linhas[y].getElementsByTagName("td")[x];
  return cell.innerHTML === "*";
}
