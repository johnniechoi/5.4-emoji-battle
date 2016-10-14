var $ = require('jQuery');
var _ = require('underscore');

function Emoji(config) {
   config = config || {};
   $.extend(this, config);
   this.health = config.health || 25;
   this.content = config.content;
}

Emoji.prototype.lowerHealth = function() {
   this.health -= _.random(2,6);
}

Emoji.prototype.attack = function(adversary /* Emoji */){
   adversary.lowerHealth();
}


// Good guys

// function (config){
//   attack.call(this, config);
// }
// Smiley.prototype = new Good();
// Smiley.prototype.attack = function(){
//   return 'lowerHealth';
//
// };

//Bad Guys

// place your code here


// // HP Bar set up.
var healthBar = function myFunction(number) {
  var d = new Date();
  var n = (d.getSeconds()/60*100).toFixed();
    document.querySelector('.healthBar').style.width = n + '%';
    console.log(n);
}
healthBar();
window.setInterval(healthBar, 1000);

//exports!
// module.exports = {
//   'CuteAnimal': CuteAnimal,
//   'Puppy': Puppy,
//   'Kitten': Kitten
// };
