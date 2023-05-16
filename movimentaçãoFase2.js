let matriz = [];
let cellId;
let interagindoComAt = true;
let posicaoAtual;
let vidas = 3
let mostrandoO = true;


//funcao para criar um elemento
function criaTag(elemento) {
    return document.createElement(elemento);
}

let tabela = document.getElementById("tabela");
let tbody = criaTag("tbody");
tabela.appendChild(tbody);

// Loop para criar as linhas
  for(let linha = 0; linha < 32; linha++) {
    let tr = criaTag("tr");
    tbody.appendChild(tr);
    matriz[linha] = [];  
    // Loop para criar as células em cada linha.
    for(let coluna = 0; coluna < 32; coluna++){
        let td = criaTag("td");
        cellId = "cell-" + linha + "-" + coluna; // cria o ID dinâmico para a célula
        td.setAttribute("id", cellId); // atribui o ID à célula
        if ((linha === 31 || linha === 0 || coluna === 0 || coluna == 31)) {
            matriz[linha][coluna] = "*";
            td.textContent = matriz[linha][coluna];
            if (linha === 1 && coluna === 0) {
              matriz[linha][coluna] = "D";
              td.textContent = matriz[linha][coluna];
          }
          } 
        else if(linha === 30 && coluna === 27 || linha === 29 && coluna === 27 || linha === 28 && coluna === 27 || linha === 28 && coluna === 28 || linha === 28 && coluna === 29 || linha === 28 && coluna === 30) {
            matriz[linha][coluna] = "#";
            td.textContent = matriz[linha][coluna];
        }
        else if( linha === 1 && coluna === 1) {
            matriz[linha][coluna] = "&";
            td.textContent = matriz[linha][coluna];
        }
        else if(linha === 30 && coluna === 30) {
          matriz[linha][coluna] = "@";
          td.textContent = matriz[linha][coluna]; 
        }
        else if (linha === 5 && coluna === 2) {
          if (mostrandoO) {
            matriz[linha][coluna] = "O";
          } else {
            matriz[linha][coluna] = " ";
          }
          td.textContent = matriz[linha][coluna];
        }
        else {
          matriz[linha][coluna] =  " ";
          td.textContent = matriz[linha][coluna];
          }
        tr.appendChild(td);
    }
}

// Posição inicial do personagem
let posicaoX = 1;
let posicaoY = 1;

// Movimentação do personagem
document.addEventListener("keydown", function(event){
  let tecla = event.keyCode;
  switch(tecla) {
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
    case 73: // I
    if (posicaoY == 30 && posicaoX == 30) {
      matriz[30][30] = "&";
      matriz[1][0] = "=";
      interagindoComAt = false;
      atualizaTabela();
    }if (posicaoY == 5 && posicaoX == 2) {
      matriz[5][2] = "&";
      matriz[28][30] = "=";
      matriz[30][27] = "*"
      matriz[29][27] = "*"
      matriz[28][27] = "*"
      matriz[28][28] = "*"
      matriz[28][29] = "*"
      mostrandoO = false;
      atualizaTabela();
    }
    break;     
  }
});

 
function esquerda() {
  if (posicaoX > 0 && !parede(posicaoX - 1, posicaoY)) {
    window.scrollBy(0, 5*2);
    if (espinho(posicaoX - 1, posicaoY)) {
      matriz[posicaoY][posicaoX] = " ";
      posicaoX = 1;
      posicaoY = 1;
      matriz[posicaoY][posicaoX] = "&";
    } else {
      matriz[posicaoY][posicaoX] = " ";
      posicaoX--;
      matriz[posicaoY][posicaoX] = "&";
    }
    atualizaTabela();
    concluirFase();
  }
}

function cima() {
  if (posicaoY > 0 && !parede(posicaoX, posicaoY - 1)) {
    window.scrollBy(0, 5*2);
    if (espinho(posicaoX, posicaoY - 1)) {
      matriz[posicaoY][posicaoX] = " ";
      posicaoX = 1;
      posicaoY = 1;
      matriz[posicaoY][posicaoX] = "&";
    } else {
      matriz[posicaoY][posicaoX] = " ";
      posicaoY--;
      matriz[posicaoY][posicaoX] = "&";
    }
    atualizaTabela();
    concluirFase();
  }
}

function direita() {
  if (posicaoX < 30 && !parede(posicaoX + 1, posicaoY)) {
    window.scrollBy(0, 5*2);
    if (espinho(posicaoX + 1, posicaoY)) {
      matriz[posicaoY][posicaoX] = " ";
      posicaoX = 1;
      posicaoY = 1;
      matriz[posicaoY][posicaoX] = "&";
    } else {
      matriz[posicaoY][posicaoX] = " ";
      posicaoX++;
      matriz[posicaoY][posicaoX] = "&";
    }
    atualizaTabela();
    concluirFase();
  }
}

function baixo() {
  if (posicaoY < 30 && !parede(posicaoX, posicaoY + 1)) {
    window.scrollBy(0, 5*2);
    if (espinho(posicaoX, posicaoY + 1)) {
      matriz[posicaoY][posicaoX] = " ";
      posicaoX = 1;
      posicaoY = 1;
      matriz[posicaoY][posicaoX] = "&";
    } else {
      matriz[posicaoY][posicaoX] = " ";
      posicaoY++;
      matriz[posicaoY][posicaoX] = "&";
    }
    atualizaTabela();
    concluirFase();
  }
}


// Função para verificar se a posição é uma parede.
function parede(x, y) {
  return matriz[y][x] === "*" || matriz[y][x] === "D";
}

function espinho(x, y) {
  if (matriz[y][x] === "#") {
    matriz[posicaoY][posicaoX] = " ";
    posicaoX = 1;
    posicaoY = 1;
    matriz[posicaoY][posicaoX] = "&";
    vidas--;
    alert(`Você perdeu uma vida no total de 3, agora você tem ${vidas} vidas`)

    if (vidas === 0) {
      alert("Você perdeu todas as vidas!");
      voltarMenu();
    }
    return true;
  }
  return false;
}


// Atualiza a tabela na página HTML
function atualizaTabela() {
  let tabela = document.getElementById("tabela");
  let tbody = tabela.getElementsByTagName("tbody")[0];
//   window.scrollTo(0, -posicaoY*300);
// const pipoca = document.getElementsByClassName("&")
// console.log(pipoca)
// const cod = pipoca.getBoundingClientRect()
// console.log(cod)
 
  for(let i = 0; i < 32; i++){
    let tr = tbody.getElementsByTagName("tr")[i];
    for(let j = 0; j < 32; j++){
      let td = tr.getElementsByTagName("td")[j];
      td.textContent = matriz[i][j];
      if (matriz[i][j] === "&") {
        td.classList.add("&");
        if((i != 30 || j != 30) && interagindoComAt){
          matriz[30][30] = "@";
      }
    }
      if (matriz[i][j] === "&") {
        td.classList.add("&");
        if((i != 5 || j != 1) && mostrandoO){
          matriz[5][2] = "O";
      }
      } else {
        td.classList.remove("&");
      }
  }
  }
}


function concluirFase() {
  if(matriz[posicaoY][posicaoX] === matriz[1][0]) {
    alert("Parabéns, você concluiu a fase 2!");
    var botao = document.createElement("button");
    botao.innerHTML = "Parabéns, Clique aqui para a fase 3 :) ";
    botao.addEventListener("click", function() {
    window.location.href = "Fase3.html";
});
document.body.appendChild(botao);
  }
}

function voltarMenu() {
  window.location.href = "TelaDeGameOver.html";
}




