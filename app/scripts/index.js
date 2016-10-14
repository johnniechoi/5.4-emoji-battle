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
   var selectedPlayer = new Emoji({health: 25, content: '👵🏼'});


   var good = [
     new models.Emoji({name: 'Smiley', image: '😁'}),
     new models.Emoji({name: 'GrandMaster', image: '👵🏻'}),
     new models.Emoji({name: 'Santa', image: '🎅🏻'}),
     new models.Emoji({name: 'Unicorn', image: '🦄'})
     new models.Emoji({name: 'Dragon', image: '🐉'})
   ];

   var bad = [
     new models.Emoji({name: 'Ghost', image: '👻'}),
     new models.Emoji({name: 'Poop', image: '💩🏻'}),
     new models.Emoji({name: 'Skull', image: '💀🏻'}),
     new models.Emoji({name: 'Mask', image: '👺'})
     new models.Emoji({name: 'Scorpian', image: '🦂'})
   ];

   var startingHealth = selectedPlayer.health;




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



// // HP Bar set up.
var healthBar = function myFunction(health) {
//When change var d and n with the attack constructor!
    document.querySelector('.healthBar').style.width = n + '%';
    document.querySelector('.hp-number').textContent = n;

    console.log(n);
    $(document).click('.hp-number')
}
healthBar();

});
