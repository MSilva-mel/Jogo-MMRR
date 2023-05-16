let matriz = [];
let cellId;
let interagindoComAt = true;
let posicaoAtual;

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
    matriz[linha] = [];  
    // Loop para criar as células em cada linha.
    for(let coluna = 0; coluna < 17; coluna++){
        let td = criaTag("td");
        cellId = "cell-" + linha + "-" + coluna; // cria o ID dinâmico para a célula
        td.setAttribute("id", cellId); // atribui o ID à célula
        if ((linha === 16 || linha === 0 || coluna === 0 || coluna == 16) || (linha === 2 && coluna != 15) || (linha === 4 && coluna != 1) || (linha === 6 && coluna != 15) || (linha === 8 && coluna != 1) || (linha === 10 && coluna != 15) || (linha === 12 && coluna != 1) || (linha === 14 && coluna != 15)) {
            matriz[linha][coluna] = "*";
            td.textContent = matriz[linha][coluna];
            if (linha === 1 && coluna === 0) {
              matriz[linha][coluna] = "D";
              td.textContent = matriz[linha][coluna];
          }
          } 
        else if( linha === 1 && coluna === 1) {
            matriz[linha][coluna] = "&";
            td.textContent = matriz[linha][coluna];
        }
        else if(linha === 15 && coluna === 1) {
          matriz[linha][coluna] = "@";
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
    case 73: //I
    if (posicaoY == 15 && posicaoX == 1) {
      matriz[15][1] = "&";
      matriz[1][0] = "=";
      interagindoComAt = false;
      atualizaTabela();
    }
      break;
  }
});

 
function esquerda() {
  if (posicaoX > 0 && !parede(posicaoX - 1, posicaoY)) {
    matriz[posicaoY][posicaoX] = " ";
    posicaoX--;
    matriz[posicaoY][posicaoX] = "&";
    atualizaTabela();
    concluirFase();
  }
}

function cima() {
  if (posicaoY > 0 && !parede(posicaoX, posicaoY - 1)) {
    matriz[posicaoY][posicaoX] = " ";
    posicaoY--;
    matriz[posicaoY][posicaoX] = "&";
    atualizaTabela();
    concluirFase();
  }
}

function direita() {
  if (posicaoX < 15 && !parede(posicaoX + 1, posicaoY)) {
    matriz[posicaoY][posicaoX] = " ";
    posicaoX++;
    matriz[posicaoY][posicaoX] = "&";
    atualizaTabela();
    concluirFase();
  }
}

function baixo() {
  if (posicaoY < 15 && !parede(posicaoX, posicaoY + 1)) {
    matriz[posicaoY][posicaoX] = " ";
    posicaoY++;
    matriz[posicaoY][posicaoX] = "&";
    atualizaTabela();
    concluirFase();
  }
}

// Função para verificar se a posição é uma parede.
function parede(x, y) {
  return matriz[y][x] === "*" || matriz[y][x] === "D";
}

function espinho(x,y) {
  return matriz[y][x] === "#";
}

// Atualiza a tabela na página HTML
function atualizaTabela() {
  let tabela = document.getElementById("tabela");
  let tbody = tabela.getElementsByTagName("tbody")[0];

  for(let i = 0; i < 17; i++){
    let tr = tbody.getElementsByTagName("tr")[i];
    for(let j = 0; j < 17; j++){
      let td = tr.getElementsByTagName("td")[j];
      td.textContent = matriz[i][j];
      if (matriz[i][j] === "&") {
        td.classList.add("&");
        if((i != 15 || j != 1) && interagindoComAt){
          matriz[15][1] = "@";
        }
      } else {
        td.classList.remove("&");
      }
  }
  }
}

function concluirFase() {
  if(matriz[posicaoY][posicaoX] === matriz[1][0]) {
    alert("Parabéns, você concluiu a fase 1!");
    var botao = document.createElement("button");
    botao.innerHTML = "Parabéns! Clique aqui para ir para a fase 2 :) ";
    botao.addEventListener("click", function() {
    window.location.href = "Fase2.html";
});
document.body.appendChild(botao);
  }
}

function fecharJanela(){
  window.close
}
