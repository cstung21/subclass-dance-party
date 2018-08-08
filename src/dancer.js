var makeDancer = function(top, left, timeBetweenSteps = 500) {
  this.$node = $('<span class="dancer"></span>');
  $('.dancer').on('mouseover', function(event) {
    $(this).animateCss('bounce'); 
  });
  
  $('.dancer').on('click', function(event) {
    $(this).animateCss('shake');  
  });
  
  this.step;
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
};


makeDancer.prototype.oldStep = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
  
makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.fadeOut = function() {
  this.$node.addClass('fadeOutDown'); 
};

makeDancer.prototype.flip = function() {
  this.$node.addClass('flip');
}
