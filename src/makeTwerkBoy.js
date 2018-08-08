var makeTwerkBoy = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="https://s2.favim.com/orig/150822/adorable-background-black-and-white-cute-Favim.com-3165433.gif" alt="twerk boy" class="dancer twerkBoy animated"/>');
  this.setPosition(top, left);
  this.step();
};

makeTwerkBoy.prototype = Object.create(makeDancer.prototype);
makeTwerkBoy.prototype.constructor = makeTwerkBoy;

makeTwerkBoy.prototype.step = function() {
  this.oldStep(); // 
  this.$node.addClass('rubberBand');
  
};