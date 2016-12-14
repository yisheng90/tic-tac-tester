$('#grid-1').click(function () {
  makeMove(0)
})
$('#grid-2').click(function () {
  makeMove(1)
})
$('#grid-3').click(function () {
  makeMove(2)
})
$('#grid-4').click(function () {
  makeMove(3)
})
$('#grid-5').click(function () {
  makeMove(4)
})
$('#grid-6').click(function () {
  makeMove(5)
})
$('#grid-7').click(function () {
  makeMove(6)
})
$('#grid-8').click(function () {
  makeMove(7)
})
$('#grid-9').click(function () {
  makeMove(8)
})
var timeout
var flash

function makeMove (gridLocation) {
  console.log('current player from make move', currentPlayer)
  var gridNumber = '#grid-' + (gridLocation + 1)
  if (isGameOver() === false && grid[gridLocation] === null) {
    if (currentPlayer === 1) {
      $('.board').toggleClass('cursor-circle')
      .removeClass('cursor-cross')
      $(gridNumber).addClass('cross')
    } else if (currentPlayer === 2) {
 // assumed player 2
      $('.board').addClass('cursor-cross')
      .removeClass('cursor-circle')
      $(gridNumber).addClass('circle')
    }

    console.log('Grid location is', gridLocation)
    playTurn(gridLocation)
    if (whoWon() > 0) {
      pushToHistory()
      showRestart()
    }
  }
  console.log('makeMove was fired', gridLocation)
  console.log('This is the end of makemove', grid)
}

function showRestart () {
  updateScore()
  $('.board').removeClass('cursor-cross')
  .removeClass('cursor-circle')
.addClass('blur')
  timeout = setInterval(function () {
    $('#restart-game').css({'opacity': '1', 'z-index': '1'})
  .animate({left: '+=10px'})
  .animate({left: '-=10px'})
  }, 10)
}

function updateScore () {
  $('#player-1 h2 span:first-child').text(player1Score)
  $('#player-1 h2 span:last-child').text(previousGame.length)
  $('#player-2 h2 span:first-child').text(player2Score)
  $('#player-2 h2 span:last-child').text(previousGame.length)
}

$('#restart-game').click(function () {
  restart()
  clearInterval(timeout)
  console.log('aftertimeout', whoWon())
  $(this).removeAttr('style')
  $('.grid').removeClass('circle')
  .removeClass('cross')
  $('.board').addClass('cursor-cross')
  .removeClass('blur')
})
