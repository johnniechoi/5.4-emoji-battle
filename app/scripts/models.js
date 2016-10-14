var $ = require('jQuery');
var _ = require('underscore');

function Emoji(config) {
   config = config || {};
   $.extend(this, config);
   this.health = config.health || 25;
   this.image = config.image || '❓';
   this.name = config.name || 'unknown';

   this.startingHealth = this.health;
   // this.power

   if(config.$healthBar !== undefined) {
      this.$healthBar = config.$healthBar;
      this.$healthBar.textContent = this.health + '/' + this.startingHealth;
   }
}




Emoji.prototype.lowerHealth = function() {
   var hit = _.random(0,Math.min(6,this.health));

   if(hit > 0){
      //this.$healthBar.parent().prev().addClass('animated shake');
   }
   this.health -= hit;
   console.log('health: ',this.health);

   // update
   if(this.$healthBar instanceof $){
      console.log('lowering health bar');
      this.$healthBar.width(this.health/this.startingHealth*100 + '%');
      this.$healthBar.text(this.health + '/' + this.startingHealth);
   }
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
module.exports = {
  'Emoji': Emoji
};
