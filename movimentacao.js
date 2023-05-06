var posicaoX = 1; // posição X inicial do personagem
var posicaoY = 1; // posição Y inicial do personagem

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 65: // A
      esquerda();
      break;
    case 87: // W
      cima();
      break;
    case 68: // D
      direita();
      break;
    case 83: // S
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
  if (posicaoX < 14 && !parede(posicaoX + 1, posicaoY)) {
    setPosition(posicaoX + 1, posicaoY);
  }
}

function baixo() {
  if (posicaoY < 14 && !parede(posicaoX, posicaoY + 1)) {
    setPosition(posicaoX, posicaoY + 1);
  }
}

function parede(x, y) {
  var table = document.getElementById("map");
  var linhas = table.getElementsByTagName("tr");
  var cell = linhas[y].getElementsByTagName("td")[x];
  return cell.innerHTML === "*";
}

function setPosition(x, y) {
  var table = document.getElementById("map");
  var linhas = table.getElementsByTagName("tr");
  var cell = linhas[y].getElementsByTagName("td")[x];
  cell.innerHTML = "&";
  var oldCell = linhas[posicaoY].getElementsByTagName("td")[posicaoX];
  oldCell.innerHTML = "";
  posicaoX = x;
  posicaoY = y;
}
