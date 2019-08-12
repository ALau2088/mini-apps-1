alert('Let\'s play tic-tac-toe!')

/* State */
// Possible ways to win
var possibleWins = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]

var playerX = [];
var playerO = [];
var state = true;
/* State End */

/* Cell Click Feature*/
// Cell Click Feature
// Event Listeners to TIC-TAC-TOE cells
document.getElementById("1").addEventListener('click', onClick);
document.getElementById("2").addEventListener('click', onClick);
document.getElementById("3").addEventListener('click', onClick);
document.getElementById("4").addEventListener('click', onClick);
document.getElementById("5").addEventListener('click', onClick);
document.getElementById("6").addEventListener('click', onClick);
document.getElementById("7").addEventListener('click', onClick);
document.getElementById("8").addEventListener('click', onClick);
document.getElementById("9").addEventListener('click', onClick);

function onClick(e){
  // x goes first
    // Add innerhtml X or O if there is not a value
  if ( e.target.innerHTML ===''){
    if (state){
      e.target.innerHTML = 'O'
      // Add value to x or o array
      playerO.push(parseInt(e.target.id))
      console.log(playerO)
    } else {
      e.target.innerHTML = 'X'
      // Add value to x or o array
      playerX.push(parseInt(e.target.id))
      console.log(playerX)
    }
  } else {
    alert('Play Not Allowed')
  }

  // Player Win Feature
  if (playerO.length >= 3){
    for (var i=0; i < possibleWins.length;i++){
       if(possibleWins[i].every(function(value){
          return playerO.includes(value)
        })){
          alert('PlayerO Wins')
          return true
        }
    }
  }

  if (playerX.length >= 3){
    for (var i=0; i < possibleWins.length;i++){
       if(possibleWins[i].every(function(value){
          return playerX.includes(value)
        })){
          alert('PlayerX Wins')
          return true
        }
    }
  }
    // no-Set div #tracker to keep track of value
  // document.getElementById("tracker").value= !document.getElementById("tracker").value
  state = !state
}
/* Cell Click Feature End */

/* Reset Feature */
// Event Listener For Reset Button
document.getElementById('reset').addEventListener('click', clear)

// Reset button
function clear(){
  document.getElementById("1").innerHTML = ''
  document.getElementById("2").innerHTML = ''
  document.getElementById("3").innerHTML = ''
  document.getElementById("4").innerHTML = ''
  document.getElementById("5").innerHTML = ''
  document.getElementById("6").innerHTML = ''
  document.getElementById("7").innerHTML = ''
  document.getElementById("8").innerHTML = ''
  document.getElementById("9").innerHTML = ''
  playerX = [];
  playerO = [];
}
/* Reset Feature End*/