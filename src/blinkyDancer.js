var makeMinion = function(top, left, timeBetweenSteps = 500) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img src="https://thumbs.gfycat.com/AssuredDentalChuckwalla-size_restricted.gif" alt="minion" class="dancer minion"/>');
  this.step();
  this.setPosition(top, left);
};



makeMinion.prototype = Object.create(makeDancer.prototype);

makeMinion.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep(); // WHY DOES THIS WORK WHEN THIS.OLDSTEP() DOES NOT
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  
};

makeMinion.prototype.constructor = makeBlinkyDancer;