var $ = require('jQuery');
var _ = require('underscore');
var models = require('./models');



// wait for DOM to be ready
$(function(){


  var player; // selected character

  //////////////////////
  // SELECT CHARACTER //
  //////////////////////

   // on 'start button' click assign selected character to player.
   var playerHealthBar = $(.player .healthBar);
   var enemyHealthBar  = $(.enemy .healthBar);
   var selectedPlayer = new Emoji({health: 25, image: '👵🏼', $healthBar: enemyHealthBar});


   var good = [
     new models.Emoji({name: 'Smiley', image: '😁', $healthBar: playerHealthBar}),
     new models.Emoji({name: 'GrandMaster', image: '👵🏻', $healthBar: playerHealthBar}),
     new models.Emoji({name: 'Santa', image: '🎅🏻', $healthBar: playerHealthBar}),
     new models.Emoji({name: 'Unicorn', image: '🦄', $healthBar: playerHealthBar})
     new models.Emoji({name: 'Dragon', image: '🐉', $healthBar: playerHealthBar})
   ];

   var bad = [
     new models.Emoji({name: 'Ghost', image: '👻', $healthBar: enemyHealthBar}}),
     new models.Emoji({name: 'Poop', image: '💩🏻', $healthBar: enemyHealthBar}}),
     new models.Emoji({name: 'Skull', image: '💀🏻', $healthBar: enemyHealthBar}}),
     new models.Emoji({name: 'Mask', image: '👺', $healthBar: enemyHealthBar}})
     new models.Emoji({name: 'Scorpian', image: '🦂', $healthBar: enemyHealthBar}})
   ];


   var selectPlayer = good[1];
   var selectedEnemy = bad[_.random(0,4)];



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





// on health:lowered event
// $(document).on('health:lowered', )
//
// });
