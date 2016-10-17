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
   this.code   = config.code || ':question:';
   this.health = config.health || 24;

   this.power   = config.power || 4;
   // this.defense = config.defense || 4;

   this.image  = emojione.toImage(this.code);
   this.startingHealth = this.health;
}

Emoji.prototype.setHealthBar = function(healthBar){
   this.$healthBar = healthBar;
   this.$healthBar.text(this.health + '/' + this.startingHealth);
}

Emoji.prototype.lowerHealth = function(power) {
   var hit = Math.ceil(power*Math.random());
   hit = Math.min(hit,this.health);

   //add this.defense

   this.health -= hit;
   console.log('health: ',this.health);

<<<<<<< HEAD
//https://github.com/daneden/animate.css <--- This stuff is super cool!---> .JC

=======
>>>>>>> last commit
      var $animate = this.$healthBar.prev();
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $animate.addClass('animated wobble').one(animationEnd, function(){
         $animate.removeClass('animated wobble');
      });


   // update health bar
   if(this.$healthBar instanceof $) {
      console.log('lowering health bar');
      this.$healthBar.width(this.health/this.startingHealth*100 + '%');
      this.$healthBar.text(this.health + '/' + this.startingHealth);
   }

   if(this.health === 0){
      $(document).trigger('emoji:death', this);
   }
}

Emoji.prototype.attack = function(adversary /* Emoji */){
   // TODO: use this.power as an argument to lowerHealth()
   adversary.lowerHealth(this.power);
}


// Good guys

//Bad Guys

// place your code here

//exports!
module.exports = {
  'Emoji':     Emoji,
  'emojione':  emojione
};
