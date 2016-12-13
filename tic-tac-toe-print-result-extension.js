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
  } else if (grid[3] === grid[4] && grid[3] === grid[5] && grid[3] !== null) {
    winner = 3 - currentPlayer
  } else if (grid[6] === grid[7] && grid[6] === grid[8] && grid[6] !== null) {
    winner = 3 - currentPlayer
  } else if (grid[0] === grid[3] && grid[0] === grid[6] && grid[0] !== null) {
    winner = 3 - currentPlayer
  } else if (grid[1] === grid[4] && grid[1] === grid[7] && grid[1] !== null) {
    winner = 3 - currentPlayer
  } else if (grid[2] === grid[5] && grid[2] === grid[8] && grid[2] !== null) {
    winner = 3 - currentPlayer
  } else if (grid[0] === grid[4] && grid[0] === grid[8] && grid[0] !== null) {
    winner = 3 - currentPlayer
  } else if (grid[2] === grid[4] && grid[2] === grid[6] && grid[2] !== null) {
    winner = 3 - currentPlayer
  } else if (tilesTaken === 9 && winner === 0) {
    winner = 3
  }
  if (winner > 0) {
    round['winner'] = winner
  }
  return winner
}

function restart () {
  grid = [
    null, null, null,
    null, null, null,
    null, null, null
  ]
  currentPlayer = 1
  tilesTaken = 0
  if (Object.keys(round).length > 0) {
    previousGame.push(round)
  }
  round = {}
  move = 1
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
