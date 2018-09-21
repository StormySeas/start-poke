// The objective of our game is to click on as many blue squares as possible during the alloted time
// User Stories/game logic
// When the user clicks begin the timer should start, and the squares should populate with a random color
//
// When the use clicks on a color the color should disapear, and score should be added or subtracted
//
// When the round is over the scores round and time should be updated and the user should be able to start again with increased difficulty.
var colors = ['#ff0000', '#00ff00', '#0000ff']
var random_Color = colors[Math.floor(Math.random() * colors.length)]
$('#title').css('color', random_Color)
$('button').on('click', () => {
  console.log('click works')
  createSquares(30)
})
function createSquares (numberOfSquares) {
  for ( let i = 0; i <= numberOfSquares; i++ ) {
    const $div = $('<div/>')
    $('.squares').append($div)
  }
}
square.css('background-color')
