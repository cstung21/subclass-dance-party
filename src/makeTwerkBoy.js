var makeTwerkBoy = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="https://s2.favim.com/orig/150822/adorable-background-black-and-white-cute-Favim.com-3165433.gif" alt="twerk boy" class="dancer twerkBoy animated"/>');
  this.setPosition(top, left);
};

makeTwerkBoy.prototype = Object.create(makeDancer.prototype);
makeTwerkBoy.prototype.constructor = makeTwerkBoy;

makeTwerkBoy.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep(); // WHY DOES THIS WORK WHEN THIS.OLDSTEP() DOES NOT
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  
};