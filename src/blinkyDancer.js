var makeMinion = function(top, left, timeBetweenSteps = 500) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="https://thumbs.gfycat.com/AssuredDentalChuckwalla-size_restricted.gif" alt="minion" class="dancer minion animated"/>');
  this.step();
  this.setPosition(top, left);
};

makeMinion.prototype = Object.create(makeDancer.prototype);
makeMinion.prototype.constructor = makeMinion;

makeMinion.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();   
};

