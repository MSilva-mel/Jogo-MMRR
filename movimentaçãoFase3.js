let matriz = [];
let cellId;
let interagindoComAt = true;
let teleportando = false;
let teleportandoBack = false;
let posicaoAtual;

//funcao para criar um elemento
function criaTag(elemento) {
    return document.createElement(elemento);
}

let tabela = document.getElementById("tabela");
let tbody = criaTag("tbody");
tabela.appendChild(tbody);

// Loop para criar as linhas
  for(let linha = 0; linha < 62; linha++) {
    let tr = criaTag("tr");
    tbody.appendChild(tr);
    matriz[linha] = [];  
    // Loop para criar as células em cada linha.
    for(let coluna = 0; coluna < 62; coluna++){
        let td = criaTag("td");
        cellId = "cell-" + linha + "-" + coluna; // cria o ID dinâmico para a célula
        td.setAttribute("id", cellId); // atribui o ID à célula
        if (linha === 0 || coluna === 0 || linha === 61 || coluna === 61) {
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
        else if(linha === 60 && coluna === 1) {
          matriz[linha][coluna] = "@";
          td.textContent = matriz[linha][coluna];
        }
        else if(linha === 20 && coluna === 30){
          matriz[linha][coluna] = ">";
          td.textContent = matriz[linha][coluna];
        }
        else if(linha === 60 && coluna === 20){
          matriz[linha][coluna] = "<";
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
      if (posicaoY == 60 && posicaoX == 1) {
        matriz[60][1] = "&";
        matriz[1][0] = "=";
        interagindoComAt = false;
        atualizaTabela();
      }
      if(posicaoY == 20 && posicaoX == 30){
        teleportar();
        console.log('iha');
      }
      else if(posicaoY == 60 && posicaoX == 20){
        teleportarBack();
        console.log('egua');
      }
      break;
  }
});

function teleportar() {
  matriz[posicaoY][posicaoX] = ">";
  matriz[20][30] = " ";
  matriz[60][20] = "&";
  posicaoY = 60;
  posicaoX = 20;
  matriz[posicaoY][posicaoX] = "&";
  teleportando = true;
  atualizaTabela();
}

function teleportarBack() {
  matriz[60][20] = "<";
  matriz[20][30] = "&";
  posicaoY = 20;
  posicaoX = 30;
  matriz[posicaoY][posicaoX] = "&";
  teleportandoBack = true;
  atualizaTabela();
}
 
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
    window.scrollBy(0, -5*4);
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
  if (posicaoX < 60 && !parede(posicaoX + 1, posicaoY)) {
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
  if (posicaoY < 60 && !parede(posicaoX, posicaoY + 1)) {
    window.scrollBy(0, 5*4);
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

  for(let i = 0; i < 62; i++){
    let tr = tbody.getElementsByTagName("tr")[i];
    for(let j = 0; j < 62; j++){
      let td = tr.getElementsByTagName("td")[j];
      td.textContent = matriz[i][j];
      if (matriz[i][j] === "&") {
        td.classList.add("&");
        if((i != 60 || j != 1) && interagindoComAt){
          matriz[60][1] = "@";
        }
        if((i != 20 || j!= 30)){
          matriz[20][30] = ">";
          console.log('oi')
        }
        if((i != 60 || j!= 20)){
          matriz[60][20] = "<";
          console.log('oi')
        }
      } else {
        td.classList.remove("&");
      }
  }
  }
}

function concluirFase() {
  if(matriz[posicaoY][posicaoX] === matriz[1][0]) {
    alert("Parabéns, você conclui o jogo!");
    var botao = document.createElement("button");
    botao.innerHTML = "Parabéns, você conseguiu, agora você voltou pra casa:) ";
    botao.addEventListener("click", function() {
    window.location.href = "TelaDeConclusão.html";
});
document.body.appendChild(botao);
  }
}

function voltarMenu() {
  window.location.href = "TelaDeGaveOver.html";
}
