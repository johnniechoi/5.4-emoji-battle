var $ = require('jQuery');
var _ = require('jQuery');

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
