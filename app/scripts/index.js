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



// '<div class="{name}-panel"></div>'
var makePanel = function( $name) {
   return $('<div class="'+ $name +'-panel">');
};

$(function(){

   var $select = $('.overlay');
   var $attackButton = $('button')

   var $playerSelect = makePanel('select');
   $select.append($playerSelect);

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
            },800);
            selectedPlayer = emo;
            selectedEnemy  = _.sample(bad);

            var $attackButton = $('button');
            $attackButton.html(emojione.toImage(':dagger:'));

            $attackButton.click(function(event){
               event.preventDefault();

            });

            $('.player .image').html(selectedPlayer.image);
            $('.enemy .image').html(selectedEnemy.image);

            selectedPlayer.setHealthBar($('.player .healthBar'));
            selectedEnemy.setHealthBar($('.enemy .healthBar'));

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

         });



      });

      $image.mouseenter(function(event){
         $(this).find('use').addClass("animated bounce");
      })

      $image.on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
         $(this).find('use').removeClass("animated bounce");
     });

      $playerSelect.append($image);
   });




   $attackButton.click(function(event){
      event.preventDefault();
      $(this).addClass('animated swing').on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
         $(this).removeClass("animated swing");
         $attackButton.prop('disabled', true);
      });


      selectedPlayer.attack(selectedEnemy);
      if(selectedEnemy.health != 0){
         setTimeout(function(){
            selectedEnemy.attack(selectedPlayer);
            setTimeout(function(){
               $attackButton.prop('disabled', false);
            }, 800); // extra delay for button
         }, 1500);  // delay for enemy attack
      }
   });

   $(document).on('emoji:death', function(event, deceased){
      if(deceased === selectedPlayer) {
         // console.log('Player died');
         $('.player svg').addClass('animated hinge')
            .on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
               $('.player .image').html(emojione.toImage(':skull:'));
               $('.player svg').addClass('animated fadeIn');
               selectedPlayer.$healthBar.empty();
               $attackButton.prop('disabled', true);
            }
         );

      }
      else {
         // console.log('Enemy died');
         $('.enemy svg').addClass('animated hinge')
            .on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
               $('.enemy .image').html(emojione.toImage(':skull:'));
               $('.enemy svg').addClass('animated fadeIn');
               selectedEnemy.$healthBar.empty();
               $attackButton.prop('disabled', true);
         });
     }

  });

});
