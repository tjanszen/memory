'use strict';

$(document).ready(init);

var $divArray = [];

var backDivs = [
  {num: 1, url: 'http://www.quirkbooks.com/sites/default/files/editor_uploads/original/pig_0.jpg'},
  {num: 2, url: 'http://www.peta.org/wp-content/uploads/2010/06/800-pigs-in-grass1.jpg'},
  {num: 3, url: 'http://www.quirkbooks.com/sites/default/files/editor_uploads/original/pig_0.jpg'},
  {num: 4, url: 'http://www.peta.org/wp-content/uploads/2010/06/800-pigs-in-grass1.jpg',},
  {num: 5, url: 'http://www.ashford.co.nz/newsite/images/stories/cssgallery/fleece/images/Romney_634_475_90.jpg'},
  {num: 6, url: 'http://www.ashford.co.nz/newsite/images/stories/cssgallery/fleece/images/Romney_634_475_90.jpg'},
  {num: 7, url: 'http://upload.wikimedia.org/wikipedia/commons/3/3d/Take_ours!.jpg'},
  {num: 8, url: 'http://upload.wikimedia.org/wikipedia/commons/3/3d/Take_ours!.jpg'},
  {num: 9, url: 'http://upload.wikimedia.org/wikipedia/commons/d/dd/Goldfish_Pearl_Scale.jpg'},
  {num: 10, url: 'http://upload.wikimedia.org/wikipedia/commons/d/dd/Goldfish_Pearl_Scale.jpg'},
  {num: 11, url: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2009/08/26/1251337215_7215/539w.jpg'},
  {num: 12, url: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2009/08/26/1251337215_7215/539w.jpg'},
  {num: 13, url: 'https://newevolutiondesigns.com/images/freebies/animals-background-7.jpg'},
  {num: 14, url: 'https://newevolutiondesigns.com/images/freebies/animals-background-7.jpg'},
  {num: 15, url: 'http://picturesforcoloring.com/wp-content/uploads/2012/03/cute-animal.jpg'},
  {num: 16, url: 'http://picturesforcoloring.com/wp-content/uploads/2012/03/cute-animal.jpg'},
  {num: 17, url: 'https://thechive.files.wordpress.com/2011/01/fat-animals-10.jpg?w=500&h=345'},
  {num: 18, url: 'https://thechive.files.wordpress.com/2011/01/fat-animals-10.jpg?w=500&h=345'}
  ]

var $flipperDivs = $('.flipper');
var chosen = "";
var matches = 0;
var total = 8

var p1 = "";
var picks = 0;
var id;

function init() {
  createCards();
  $('#start').click(startTimer);
  $('.flip-container').click(flipThatBitch);
}

function startTimer() {
  var counter = 6000;

  id = setInterval(function() {
    counter--;
    if (counter >= 0) {
      $('#timer').text(counter);
    }
    if(!counter) {
      alert('You definitely need to step up your game! You only got ' + matches + ' correct!')
      counter = 6000;
      stopTimer()
      $('#timer').text
      var flippers = $('.flippers');
      for(var i = 0; i < flippers.length; i++){
        flippers[i].removeClass('flipper');
      }
    }
  }, 10);

}

function stopTimer() {
  clearInterval(id);

}

function createCards() {
  var newBacks = _.shuffle(backDivs);
  for (var i = 0; i < 17; i++) {
    var $div = $('<div>');
    $div.addClass('back');
    $div.css('background-image', 'url(" ' + newBacks[i]['url'] + ' ")');

    $divArray.push($div);
  }
  for(var i = 0; i < 17; i++) {
    var a = $flipperDivs[i];
    ($(a)).append($divArray[i]);
  }
}

function flipThatBitch() {
  $(this).addClass('flipper');
  $(this).css('-webkit-transform', 'rotateY(180deg)');
  if(p1 === "") {
    p1 = $(this).children(0).children(1)[1].style['cssText']
    chosen = $(this)
  }else if (p1 === $(this).children(0).children(1)[1].style['cssText']) {
    matches += 1;
    p1 = ""
    chosen = ""
    addCheckMark();
    if(matches === total)(
      alert("YOU WIN!!!!!")
    )
  }else {

      $(this).removeClass("flipper");
      $(this).css('-webkit-transform', 'rotateY(360deg)')
      chosen.removeClass('flipper');
      chosen.css('-webkit-transform', 'rotateY(360deg)');
      p1 = ''
      chosen = ''
  }
}

function addCheckMark() {
  var $div = $('#checks');
  var $check = $('<i>')
  $check.addClass('fa fa-check fa-2x');
  $div.append($check);
}
