var grid = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0
]

var currentPlayer = 1
var tilesTaken = 0
var previousGame = []
var round = {}
var move = 1
function playTurn (index) {
  if (grid[index] === 0) {
    grid[index] = currentPlayer
    round['move-' + move] = index
    round['move-' + move + '-Player'] = currentPlayer
    move += 1
    currentPlayer = 3 - currentPlayer
    tilesTaken += 1
    return true
  } else {
    return false
  }
}

function isGameOver () {
  var status = false
  if (whoWon() > 0) {
    status = true
  }
  return status
}

function whoWon () {
  var winner = 0
  if (grid[0] === grid[1] && grid[0] === grid[2] && grid[0] !== 0) {
    winner = 3 - currentPlayer
  } else if (grid[3] === grid[4] && grid[3] === grid[5] && grid[3] !== 0) {
    winner = 3 - currentPlayer
  } else if (grid[6] === grid[7] && grid[6] === grid[8] && grid[6] !== 0) {
    winner = 3 - currentPlayer
  } else if (grid[0] === grid[3] && grid[0] === grid[6] && grid[0] !== 0) {
    winner = 3 - currentPlayer
  } else if (grid[1] === grid[4] && grid[1] === grid[7] && grid[1] !== 0) {
    winner = 3 - currentPlayer
  } else if (grid[2] === grid[5] && grid[2] === grid[8] && grid[2] !== 0) {
    winner = 3 - currentPlayer
  } else if (grid[0] === grid[4] && grid[0] === grid[8] && grid[0] !== 0) {
    winner = 3 - currentPlayer
  } else if (grid[2] === grid[4] && grid[2] === grid[6] && grid[2] !== 0) {
    winner = 3 - currentPlayer
  } else if (tilesTaken === 9 && winner === 0) {
    winner = 3
  }
  round['winner'] = winner
  previousGame.push(round)
  return winner
}

function restart () {
  grid = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ]
  currentPlayer = 1
  tilesTaken = 0
  round = {}
  move = 1
}

function printResult (gameNumber) {
  console.log('------------Game ', gameNumber, '--------------')
  for (var key in previousGame[gameNumber]) {
    console.log(key.toUpperCase(), ':  ', previousGame[gameNumber][key])
  }
}
