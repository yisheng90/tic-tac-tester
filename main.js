/* $('#grid-1').click(function () {
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
*/
var restartButton
var flash

$('.grid').click(function (event) {
  var element
  var el
//  for (var i = 0; i < 9; i++) {
  element = event.target.id
  el = element[element.length - 1]
  makeMove(el)
  // }
}
)

function makeMove (gridLocation) {
  var gridNumber = '#grid-' + (gridLocation)
  if (isGameOver() === false && grid[gridLocation] === null) {
    if (currentPlayer === 1) {
      $('.board').toggleClass('cursor-circle')
      .removeClass('cursor-cross')
      $(gridNumber).addClass('cross')
      $('#msgbox').css({'opacity': '1', 'z-index': '1'})
      .text("Player O's turn")
    } else if (currentPlayer === 2) {
 // assumed player 2
      $('.board').addClass('cursor-cross')
      .removeClass('cursor-circle')
      $(gridNumber).addClass('circle')
      $('#msgbox').css({'opacity': '1', 'z-index': '1'})
      .text("Player X's turn")
    }

    playTurn(gridLocation)
    if (whoWon() > 0) {
      pushToHistory()
      showRestart()
      updateScore()
    }

    flash = setTimeout(function () {
      $('#msgbox').removeAttr('style')
    }, 500)
  }
}

function showRestart () {
  $('.board').removeClass('cursor-cross')
  .removeClass('cursor-circle')
  .addClass('blur')

  if (whoWon() === 1) {
    $('#msgbox').text('Player X Won.')
  } else if (whoWon() === 2) {
    $('#msgbox').text('Player O Won.')
  } else if (whoWon() === 3) {
    $('#msgbox').text("It's a Draw.")
  }
  restartButton = setInterval(function () {
    $('#msgbox').css({'opacity': '1', 'z-index': '1'})
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
  clearInterval(restartButton)
  restart()
  $(this).removeAttr('style')
  $('.grid').removeClass('circle')
  .removeClass('cross')
  $('.board').addClass('cursor-cross')
  .removeClass('blur')
  $('#msgbox').removeAttr('style')
})
