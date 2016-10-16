var $ = require('jQuery');
var _ = require('underscore');
var models = require('./models');
var listTemplate = require('../templates/application.hbs');

// wait for DOM to be ready
$(function(){

  var player; // selected character

  //////////////////////
  // SELECT CHARACTER //
  //////////////////////

   var good = [
     new models.Emoji({name: 'Smiley', image: '😁'})
    //  new models.Emoji({name: 'GrandMaster', image: '👵🏻'}),
    //  new models.Emoji({name: 'Santa', image: '🎅🏻'}),
    //  new models.Emoji({name: 'Unicorn', image: '🦄'}),
    //  new models.Emoji({name: 'Dragon', image: '🐉'})
   ];

   var bad = [
     new models.Emoji({name: 'Ghost', image: '👻'})
    //  new models.Emoji({name: 'Poop', image: '💩🏻'}),
    //  new models.Emoji({name: 'Skull', image: '💀🏻'}),
    //  new models.Emoji({name: 'Mask', image: '👺'}),
    //  new models.Emoji({name: 'Scorpian', image: '🦂'})
   ];

console.log('underbad: ', bad);

var selectedPlayer = good[0];
var selectedEnemy = bad[0];

 var goodcontext = {'good': good}
 var badcontext = {'bad': bad}

   $('.player').html(listTemplate(goodcontext));
   $('.enemy').html(listTemplate(badcontext));

   // TODO: stamp character templates

   selectedPlayer.setHealthBar($('.player .healthBar'));
   console.log(selectedPlayer);
   selectedEnemy.setHealthBar($('.enemy .healthBar'));

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
