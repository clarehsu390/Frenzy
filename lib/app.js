
const Game = require("./game");

$( () => {
 const game = new Game();
 game.handleClick();
 $('#splash').css('opacity', '0.5');
});
