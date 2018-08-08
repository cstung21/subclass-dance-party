
describe('twerkBoy', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeTwerkBoy(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });
  
  describe('dance', function() {
    it('should call step at least once', function() {
      sinon.spy(blinkyDancer, 'step');
      blinkyDancer.step();
      expect(blinkyDancer.step.callCount).to.be.equal(1);
    });
  });

  it('should have a step function that makes adds class rubberBand', function() {
    sinon.spy(blinkyDancer.$node, 'addClass');
    blinkyDancer.step();
    expect(blinkyDancer.$node.addClass.called).to.be.true;
  });

});