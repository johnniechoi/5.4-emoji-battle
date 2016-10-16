var $ = require('jQuery');
var _ = require('underscore');
var emojione = require('emojione')
var models = require('./models');

// wait for DOM to be ready
$(function(){

  var player; // selected character

  //////////////////////
  // SELECT CHARACTER //
  //////////////////////

  var good = [ new models.Emoji({power: 8, health: 25, code: ':grinning:'   }),
               new models.Emoji({power: 8, health: 25, code: ':older_woman:'}),
               new models.Emoji({power: 8, health: 25, code: ':santa:'      }),
               new models.Emoji({power: 8, health: 25, code: ':unicorn:'    }),
               new models.Emoji({power: 8, health: 25, code: ':dragon:'     })
             ];

   var bad = [ new models.Emoji({power: 8, health: 25, code: ':poop:' }),
               new models.Emoji({power: 8, health: 25, code: ':robot:'}),
               new models.Emoji({power: 8, health: 25, code: ':alien:'}),
               new models.Emoji({power: 8, health: 25, code: ':imp:'   })
             ];



   //
   // $().appendTo('.app');
   // $('.app').append("<div class='select-panel'></div>");
   // var $select = $('.select-panel');
   //
   // // fill selection panel
   // _.each(good, function(emo){
   //    $select.append(emo.image);
   // })





   var selectedPlayer = good[0];
   var selectedEnemy = bad[1];
   //var selectedEnemy = _.sample[bad];

   // $('#app').html("<div class='player'></div><div class='enemy'></div>");

   $('.player .image').html(selectedPlayer.image);
   $('.enemy .image').html(selectedEnemy.image);
   //

   selectedPlayer.setHealthBar($('.player .healthBar'));
   selectedEnemy.setHealthBar($('.enemy .healthBar'));


   // $('.player .character-image ').html(selectedPlayer.image);
   // $('.enemy .character-image ').html(selectedEnemy.image);

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

$('button').click(function(event){
   event.preventDefault();
   setTimeout(function(){
   selectedEnemy.attack(selectedPlayer);
 }, 2000);
   selectedPlayer.attack(selectedEnemy);
 });
});
