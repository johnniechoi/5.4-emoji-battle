var $ = require('jQuery');
var _ = require('underscore');

function Emoji(config) {
   config = config || {};
   $.extend(this, config);
   this.health = config.health || 25;
   this.content = config.content || '❓';
   // this.power
}

Emoji.prototype.lowerHealth = function() {
   this.health -= _.random(2,6);
   $(document).trigger('health:lowered' , this.health);

}

Emoji.prototype.attack = function(adversary /* Emoji */){
   // TODO: use this.power as an argument to lowerHealth()
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


//exports!
// module.exports = {
//   'CuteAnimal': CuteAnimal,
//   'Puppy': Puppy,
//   'Kitten': Kitten
// };
