alert('Let\'s play tic-tac-toe!')

// Possible ways to win
var possibleWins = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]

var x = [];
var y = [];

document.getElementById("1").addEventListener("click", onClick);
document.getElementById("2").addEventListener("click", onClick);
document.getElementById("3").addEventListener("click", onClick);
document.getElementById("4").addEventListener("click", onClick);
document.getElementById("5").addEventListener("click", onClick);
document.getElementById("6").addEventListener("click", onClick);
document.getElementById("7").addEventListener("click", onClick);
document.getElementById("8").addEventListener("click", onClick);
document.getElementById("9").addEventListener("click", onClick);

function onClick(e){
  // x goes first
    // Add innerhtml x or o
  if (document.getElementById("tracker").value){
    e.target.innerHTML = 'O'
  } else {
    e.target.innerHTML = 'X'
  }


  // Set div #tracker to keep track of value
  document.getElementById("tracker").value= !document.getElementById("tracker").value
  // Add value to x or o array
  // Check each possible win in values
    // yes alert win
    // no change current to !current
}

// TOD0: reset button
// clear inner html