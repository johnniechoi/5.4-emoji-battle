var $ = require('jQuery');
var _ = require('underscore');
var emojione = require('emojione')
var models = require('./models');

// wait for DOM to be ready


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

$(function(){

   var selectedPlayer = good[0];

   $('#app').append("<div class='select-panel'></div>");
   var $select = $('.select-panel');

   // fill selection panel
   _.each(good, function(emo){
      var $image = $(emo.image);
      $image.click(function(){
         battle(emo);
         $select.addClass('hide');
      });
      $select.append($image);
   });



   function battle(player){
      console.log(player);
         var selectedPlayer = player;
         var selectedEnemy  = _.sample(bad);

         console.log('enemy',selectedEnemy);

         $('.player .image').html(selectedPlayer.image);
         $('.enemy .image').html(selectedEnemy.image);

         selectedPlayer.setHealthBar($('.player .healthBar'));
         selectedEnemy.setHealthBar($('.enemy .healthBar'));

         $('button').click(function(event){
            event.preventDefault();
            $('button').prop('disabled', true);
            setTimeout(function(){
               selectedEnemy.attack(selectedPlayer);
               setTimeout(function(){
                  $('button').prop('disabled', false);
               }, 1000); // small extra delay for button
            }, 1500);  // delay for enemy attack
            selectedPlayer.attack(selectedEnemy);
          });

          $(document).on('emoji:death', function(event, deceased){
             if(deceased === selectedPlayer) {
               console.log('Player died');
            }
            else {
               console.log('Enemy died');
            }
          });

   }


});
