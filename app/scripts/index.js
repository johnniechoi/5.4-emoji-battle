var $ = require('jQuery');
var _ = require('underscore');
var models = require('./models');



// wait for DOM to be ready
$(function(){


  var player; // selected character

  //////////////////////
  // SELECT CHARACTER //
  //////////////////////


   var good = [
     new models.Emoji({name: 'Smiley', image: '😁'}),
     new models.Emoji({name: 'GrandMaster', image: '👵🏻'}),
     new models.Emoji({name: 'Santa', image: '🎅🏻'}),
     new models.Emoji({name: 'Unicorn', image: '🦄'})
     new models.Emoji({name: 'Dragon', image: '🐉'})
   ];

   var bad = [
     new models.Emoji({name: 'Ghost', image: '👻', $healthBar: enemyHealthBar}),
     new models.Emoji({name: 'Poop', image: '💩🏻', $healthBar: enemyHealthBar}),
     new models.Emoji({name: 'Skull', image: '💀🏻', $healthBar: enemyHealthBar}),
     new models.Emoji({name: 'Mask', image: '👺', $healthBar: enemyHealthBar})
     new models.Emoji({name: 'Scorpian', image: '🦂', $healthBar: enemyHealthBar})
   ];


   var selectedPlayer = good[1];
   var selectedEnemy = bad[_.random(0,4)];


   // TODO: stamp character templates


   selectedPlayer.$healthBar = $('.player .healthBar');
   selectedEnemy.$healthBar  = $('.enemy .healthBar');



  //////////////////
  // SELECT ENEMY //
  //////////////////

  // randomly select enemy


// Creat a set up function to:
// add event listenter for when the play has chosen a charater. Then randomly
// select the bad guy. Set a trigger to get the bad guy populated into the right
// screen. Dont let the user push the attack button. Set time for


  //////////////////
  // SETUP BATTLE //
  //////////////////



// Create two serate divs left and right.



$(button).click(function(event){
   selectedPlayer.attack(selectedEnemy);
});


// on health:lowered event
// $(document).on('health:lowered', )
//
// });
