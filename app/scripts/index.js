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
   return;
};

$(function(){

   var $select = $('.overlay');
   var $attackButton = $('button')


   $select.append('<div class="select-panel"></div>');
   var $playerSelect = $('.select-panel');

   var selectedPlayer;
   var selectedEnemy;
   var $attackButton = $('button');


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


            $attackButton.html(emojione.toImage(':dagger:'));


            $('.player .image').html(selectedPlayer.image);
            $('.enemy .image').html(selectedEnemy.image);

            selectedPlayer.setHealthBar($('.player .healthBar'));
            selectedEnemy.setHealthBar($('.enemy .healthBar'));

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
      $attackButton.prop('disabled', true);
      $(this).addClass('animated swing').on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
         $(this).removeClass("animated swing");

      });


      selectedPlayer.attack(selectedEnemy);

      setTimeout(function(){
         selectedEnemy.attack(selectedPlayer);
         setTimeout(function(){
            $attackButton.prop('disabled', false);
         }, 800); // extra delay for button
      }, 1500);  // delay for enemy attack
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
