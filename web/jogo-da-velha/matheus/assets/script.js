const gameArea = document.getElementById('gameSection');
const playerArea = document.getElementById('charSelect');
let player1 = null; 
let player2 = null; 
let check = 0;

playerArea.addEventListener('click', (event) => {
  if(event.target == document.getElementById('playerX')){
    player1 = 'X';
    player2 = 'O';
    playerArea.classList.add('hide');
    gameArea.classList.remove('hide');
  } else if(event.target == document.getElementById('playerO')){
    player1 = 'O';
    player2 = 'X';
    playerArea.classList.add('hide');
    gameArea.classList.remove('hide');
  }
})


gameArea.addEventListener('click', (event) => {
  if(check%2 == 0){
    if(event.target.innerHTML == ''){
      event.target.innerHTML = player1;
      check++;
    }

  }if (event.target.innerHTML == ''){
    event.target.innerHTML = player2;
    check++;
  }
  checkWin();
})


function checkWin() {
  // Verificação de vitória Horizontal para o P1 e o P2
  for(var i = 0; i < 9; i+=3) {
    if(gameArea.children[i].innerHTML == player1 && gameArea.children[i+1].innerHTML == player1 && 
      gameArea.children[i+2].innerHTML == player1){
      alert("Player 1 Win!");
      stop();
    }else if(gameArea.children[i].innerHTML == player2 && gameArea.children[i+1].innerHTML == player2 && 
      gameArea.children[i+2].innerHTML == player2){
      alert("Player 2 Win!");
      stop();
    }
  }

    // Verificação de vitória Vertical para o P1 e o P2
    for(var i = 0; i < 3; i+=1) {
      if(gameArea.children[i].innerHTML == player1 && gameArea.children[i+3].innerHTML == player1 && 
        gameArea.children[i+6].innerHTML == player1){
        alert("Player 1 Win!");
        stop();
      }else if(gameArea.children[i].innerHTML == player2 && gameArea.children[i+3].innerHTML == player2 && 
        gameArea.children[i+6].innerHTML == player2){
        alert("Player 2 Win!");
        stop();
      }
    }

    // Verificação de vitória Diagonal para o P1 
      if(gameArea.children[0].innerHTML == player1 && gameArea.children[0+4].innerHTML == player1 && 
        gameArea.children[0+8].innerHTML == player1){
          alert("Player 1 Win!");
          stop();
      }else if(gameArea.children[0+2].innerHTML == player1 && gameArea.children[0+4].innerHTML == player1 && 
        gameArea.children[0+6].innerHTML == player1){
          alert("Player 1 Win!");
          stop();
      }

    // Verificação de vitória Diagonal para o P2
    if(gameArea.children[0].innerHTML == player2 && gameArea.children[0+4].innerHTML == player2 && 
      gameArea.children[0+8].innerHTML == player2){
        alert("Player 2 Win!");
        stop();
    }else if(gameArea.children[0+2].innerHTML == player2 && gameArea.children[0+4].innerHTML == player2 && 
      gameArea.children[0+6].innerHTML == player2){
        alert("Player 2 Win!");
        stop();
    }
      
    console.log(gameArea.childNodes.innerHTML);
    if (gameArea.childNodes.innerHTML != null) {
      
    }
    if(check == 9 ){
      alert("Véia")
    }
 
}