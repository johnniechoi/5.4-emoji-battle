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

   var $select = $('.overlay');
   $select.append('<div class="select-panel"></div>');
   var $playerSelect = $('.select-panel');

   var selectedPlayer;
   var selectedEnemy;

   // fill selection panel
   _.each(good, function(emo){
      var $image = $(emo.image);
      $image.click(function(event) {

         $(this).addClass("animated pulse").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
            $(this).removeClass("animated pulse");
            setTimeout(function(){
               $select.empty();
               $select.addClass('hide');
            },1000);


         });

         selectedPlayer = emo;
         selectedEnemy  = _.sample(bad);

         // $select.append('<div class="enemy-select half"></div>');
         // var $enemySelect = $('.enemy-select');

         // _.each(bad, function(emo){
         //    var $image = $(emo.image);
         //    $enemySelect.append($image);
         //    if(emo !== selectedEnemy){
         //       $image.addClass("animated tada").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
         //          $(this).removeClass("animated bounce");
         //       });
         //    }
         //    else {
         //
         //       $image.addClass("animated tada").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
         //          $(this).removeClass("animated tada");
         //       });
         //    }
         // });


         $('.player .image').html(selectedPlayer.image);
         $('.enemy .image').html(selectedEnemy.image);

         selectedPlayer.setHealthBar($('.player .healthBar'));
         selectedEnemy.setHealthBar($('.enemy .healthBar'));


      });

      $image.mouseenter(function(event){
         $(this).addClass("animated bounce");
      })

      $image.on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
         $(this).removeClass("animated bounce");
     });

      $playerSelect.append($image);
   });


   $('button').click(function(event){
      event.preventDefault();
      $('button').prop('disabled', true);
      setTimeout(function(){
         selectedEnemy.attack(selectedPlayer);
         setTimeout(function(){
            $('button').prop('disabled', false);
         }, 800); // extra delay for button
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


});
