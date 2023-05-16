let matriz = [];
let cellId;
let interagindoComAt = true;
let posicaoAtual;
let vidas = 3
let mostrandoO = true;
let vilaoPosX = 2;
let vilaoPosY = 29;
let direcaoVilao = 1;
let boneco = "$";

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
        else if((linha === 2 && coluna > 5 && coluna < 19) || (linha === 3 && coluna < 5) || (linha > 2 && linha < 7 && coluna === 4) || (linha > 1 && linha < 9 && coluna === 6) || (linha=== 30 && coluna < 10) || (linha=== 13 && coluna < 9) || (linha=== 11 && coluna < 9) || (linha > 3 && linha < 11 && coluna === 8) || (linha=== 9 && coluna > 1 && coluna < 6) || (linha === 7 && coluna === 3) || (linha === 8 && coluna === 2) || (linha > 1 && linha < 14 && coluna === 10) || (linha > 3 && linha < 16 && coluna === 12) ||  (linha === 15 && coluna > 7 && coluna < 16) || (linha === 14 && coluna === 8) || (linha === 17 && coluna > 1 && coluna < 4) || (linha === 16 && coluna > 1 && coluna < 4) || (linha === 16 && coluna > 5 && coluna < 9) || (linha === 17 && coluna > 5 && coluna < 9) || (linha === 21 && coluna > 1 && coluna < 8) || (linha === 20 && coluna === 1) || (linha=== 20 && coluna === 8) || (linha > 21 && linha < 27 && coluna === 3) || (linha === 26 && coluna < 5) || (linha === 28 && coluna < 6 && coluna > 1) || (coluna === 5 && linha === 25) || (coluna === 6 && linha === 24) || (coluna === 7 && linha === 23) || (coluna === 8 && linha === 22) || (coluna === 9 && linha === 21) || (coluna === 10 && linha === 20) || (coluna === 11 && linha === 19) || (coluna === 12 && linha === 18) || (coluna === 13 && linha === 17) || (coluna === 6 && linha === 27) || (coluna === 7 && linha === 26) || (coluna === 8 && linha === 25) || (coluna === 9 && linha === 24) || (coluna === 10 && linha === 23) || (coluna === 11 && linha === 22) || (coluna === 12 && linha === 21) || (coluna === 13 && linha === 20) || (coluna === 14 && linha === 19) || (coluna === 15 && linha === 18) || (coluna === 16 && linha === 17) || (coluna === 9 && linha === 28) || (coluna === 10 && linha === 27) || (coluna === 11 && linha === 26) || (coluna === 12 && linha === 25) || (coluna === 13 && linha === 24) || (coluna === 14 && linha === 23) || (coluna === 15 && linha === 22) || (coluna === 16 && linha === 21) || (coluna === 17 && linha === 20) || (coluna === 18 && linha === 19) || (coluna === 19 && linha === 18) || (linha === 21 && coluna > 12 && coluna < 17) || (linha > 2 &&  linha < 6 && coluna === 14) || (coluna === 15 && linha > 4 && linha < 8) || (linha === 8 && coluna === 16) || (linha === 9 && coluna === 17) || (linha === 10 && coluna > 14 && coluna < 17) || (linha > 10 && linha < 14 && coluna === 15) || (linha === 13 && coluna > 14 && coluna < 20)|| (coluna === 20 && linha > 2 && linha < 13) 
        || (coluna === 22 && linha > 1 && linha < 15) || (linha === 2 && coluna > 22 && coluna < 26) || (coluna === 25 && linha > 4 && linha < 16) || (coluna === 27 && linha > 1 && linha < 18)  || (coluna === 29 && linha > 1 && linha < 29) || (linha === 14 && coluna === 19) || (linha === 15 && coluna > 16 && coluna < 22) || (linha === 16 && coluna === 17) || (coluna === 24 && linha === 16) || (linha === 17 && coluna > 16 && coluna < 24) || (linha === 25 && coluna > 17 && coluna < 29) || (coluna === 21 && linha > 17 && linha < 20) || (coluna === 25 && linha > 17 && linha < 25) || (coluna === 26 && linha === 18) || (coluna === 24 && linha === 19) || (coluna === 23 && linha === 20) || (coluna === 22 && linha === 21) || (coluna === 21 && linha === 22) || (coluna === 20 && linha === 23) || (coluna === 19 && linha === 24) || (coluna === 24 && linha === 19) || (coluna === 16 && linha === 27) || (coluna === 15 && linha === 28) || (coluna === 14 && linha === 29) || (coluna === 13 && linha === 30) || (linha === 27 && coluna > 16 && coluna < 26) || (coluna === 25 && linha > 27) ){
            matriz[linha][coluna] = "#";
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
//Y e X estão trocados
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
      matriz[28][30] = " ";
      mostrandoO = false;
      atualizaTabela();
    }
    break;     
  }
});

 
function esquerda() {
  if (posicaoX > 0 && !parede(posicaoX - 1, posicaoY)) {
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
    window.scrollBy(0, -5*2);
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
  if (matriz[y][x] === "#" || matriz[y][x] === "$") {
    matriz[posicaoY][posicaoX] = " ";
    matriz[28][30] = "#"
    matriz[5][2] = "O"
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

function bonecoMau(x, y){
  if (matriz[y][x] === "$") {
    matriz[posicaoY][posicaoX] = " ";
    matriz[28][30] = "#"
    matriz[5][2] = "O"
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

function moverBoneco() {
  if(vilaoPosX === 1 || vilaoPosX === 13) {
    direcaoVilao *= -1;
  }
  vilaoPosX += direcaoVilao;
  bonecoMau(posicaoX, posicaoY);
  matriz[vilaoPosY][vilaoPosX] = boneco;
  matriz[vilaoPosY][vilaoPosX - direcaoVilao] = " ";
  console.log("Olá");
  atualizaTabela();
}
moverBoneco();

document.addEventListener("DOMContentLoaded", function() {
  setInterval(moverBoneco, 200); // Inicia o movimento do vilão a cada 500 milissegundos (0,5 segundos)
});
