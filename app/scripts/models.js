var $ = require('jQuery');
var _ = require('underscore');
var _ = require('underscore');
var emojione = require('emojione')


emojione.imageType = 'svg';
emojione.sprites = true;
emojione.imagePathSVGSprites = '../../node_modules/emojione/assets/sprites/emojione.sprites.svg';

function Emoji(config) {
   config = config || {};
   $.extend(this, config);
   this.image  = emojione.toImage(config.image) || emojione.toImage('❓');
   this.health = config.health || 24;
   this.name   = config.name || 'unknown';
   this.power = config.power || 4;

   this.startingHealth = this.health;


   if(this.$healthBar instanceof $) {
      this.$healthBar = config.$healthBar;
      this.$healthBar.textContent = this.health + '/' + this.startingHealth;
   }
}

Emoji.prototype.setHealthBar = function(healthBar){
   this.$healthBar = healthBar;
   this.$healthBar.text(this.health + '/' + this.startingHealth);
}

Emoji.prototype.lowerHealth = function(power) {
   var hit = _.random(1,Math.min(6,this.health));

//https://github.com/daneden/animate.css <--- This stuff is super cool!---> .JC
   if(hit > 0){

      this.$healthBar.parent().prev().on('click', function(){
          $(this).addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function(){
          $(this).removeClass('animated shake')
        });
    });
 };

      // 
      // var $animate = this.$healthBar.prev();
      // var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      // $animate.addClass('animated shake').one(animationEnd, function(){
      //    $animate.removeClass('animated shake');
      // });
   }

   this.health -= hit;
   console.log('health: ',this.health);

   // update
   if(this.$healthBar instanceof $) {
      console.log('lowering health bar');
      this.$healthBar.width(this.health/this.startingHealth*100 + '%');
      this.$healthBar.text(this.health + '/' + this.startingHealth);
   }
}

Emoji.prototype.attack = function(adversary /* Emoji */){
   // TODO: use this.power as an argument to lowerHealth()
   adversary.lowerHealth(this.power);
}

// Good guys

// Emoji.prototype = new Bad();
// bad{
//
// }

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
