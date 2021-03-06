$(document).ready(function() {
  window.dancers = [];
  
  $.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});
  
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      Math.floor(Math.random() * (800 - 500) + 500),
      Math.floor(Math.random() * (1000 - 100) + 100), 250
    
    
      // $('body').height() * Math.random(),
      // $('body').width() * Math.random(), 250
      // Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  
  $('.moveToSide').on('click', function(event) {
    var startTopPos = 500;
    var left = 150;
    
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(startTopPos, left);
      left+= 25;
    }
   
   });
  
  $('.randomize').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      var top = Math.floor(Math.random() * (800 - 500) + 500);
      var left = Math.floor(Math.random() * (1000 - 100) + 100);
      
      window.dancers[i].setPosition(top, left);
    }
    $('.fadeOutDown').removeClass('fadeOutDown').addClass('fadeInUp');
  });
  
  $('.battleButton').on('click', function(event) {
    var offSet = 500;

    window.dancers[0].setPosition(offSet, 500);
    window.dancers[1].setPosition(offSet, 550);
    
    for (let i = 0; i < window.dancers.length; i++) {
      if (i !== 0 && i !== 1) {
        window.dancers[i].fadeOut();
      }
    }
    
    window.dancers[0].flip();
    window.dancers[1].flip();
    
  });
  
  
});

