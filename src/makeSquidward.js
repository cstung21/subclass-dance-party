var makeSquidward = function(top, left, timeBetweenSteps = 500) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="https://data.whicdn.com/images/209120463/original.gif" alt="squidward" class="dancer squidward animated"/>');
  this.setPosition(top, left);
};

makeSquidward.prototype.constructor = makeSquidward;
makeSquidward.prototype = Object.create(makeDancer.prototype);

makeSquidward.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep(); 
  this.$node.addClass('lightSpeedIn'); 
};

