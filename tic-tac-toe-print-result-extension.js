var grid = [
  null, null, null,
  null, null, null,
  null, null, null
]
var currentPlayer = 1
var tilesTaken = 0
var previousGame = []
var round = {}
var move = 1
var player1Score = 0
var player2Score = 0

function playTurn (index) {
  if (isGameOver() === false && grid[index] === null) {
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
  if (grid[0] === grid[1] && grid[0] === grid[2] && grid[0] !== null) {
    winner = 3 - currentPlayer
    flash = [0, 1, 2]
  } else if (grid[3] === grid[4] && grid[3] === grid[5] && grid[3] !== null) {
    winner = 3 - currentPlayer
    flash = [3, 4, 5]
  } else if (grid[6] === grid[7] && grid[6] === grid[8] && grid[6] !== null) {
    winner = 3 - currentPlayer
    flash = [6, 7, 8]
  } else if (grid[0] === grid[3] && grid[0] === grid[6] && grid[0] !== null) {
    winner = 3 - currentPlayer
    flash = [0, 3, 6]
  } else if (grid[1] === grid[4] && grid[1] === grid[7] && grid[1] !== null) {
    winner = 3 - currentPlayer
    flash = [1, 4, 7]
  } else if (grid[2] === grid[5] && grid[2] === grid[8] && grid[2] !== null) {
    winner = 3 - currentPlayer
    flash = [2, 5, 8]
  } else if (grid[0] === grid[4] && grid[0] === grid[8] && grid[0] !== null) {
    winner = 3 - currentPlayer
    flash = [0, 4, 8]
  } else if (grid[2] === grid[4] && grid[2] === grid[6] && grid[2] !== null) {
    winner = 3 - currentPlayer
    flash = [2, 4, 6]
  } else if (tilesTaken === 9 && winner === 0) {
    winner = 3
    flash = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  }
  if (winner > 0) {
    round['winner'] = winner
  }
  return winner
}

function pushToHistory () {
  if (Object.keys(round).length > 0) {
    previousGame.push(round)
    console.log(previousGame.length)
  }
  if (round['winner'] === 1) {
    player1Score += 1
  } else if (round['winner'] === 2) {
    player2Score += 1
  }
}

function restart () {
  console.log('restart', round)
  grid = [
    null, null, null,
    null, null, null,
    null, null, null
  ]
  currentPlayer = 1
  tilesTaken = 0
  round = {}
  move = 1
  flash = []
}

function printResult (gameNumber) {
  if (gameNumber < previousGame.length) {
    console.log('------------Game ', gameNumber, '--------------')
    for (var key in previousGame[gameNumber]) {
      console.log(key.toUpperCase(), ':  ', previousGame[gameNumber][key])
    }
    console.log('----------------------------------')
  } else {
    (
    console.log('-----------This game is still progressing---------------')
  )
  }
}
