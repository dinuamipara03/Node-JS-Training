var assert = require('assert');

var app = require('./app.js');

describe('Calculator Tests', function() {
	it('returns 1+1=2', function(done) {
		assert.equal(app.add(1, 1), 2);
		done();
	});

	it('returns 2*2=4', function(done) {
		assert.equal(app.mul(2, 2), 4);
		done();
	});
});


describe('String operations', () => {
	describe('toUpperCase', () => {
	  it('should convert a string to uppercase', () => {
		assert.equal("hello".toUpperCase(), "HELLO");
	  });
	});
  
	describe('toLowerCase', () => {
	  it('should convert a string to lowercase', () => {
		assert.equal("HELLO".toLowerCase(), "hello");
	  });
	});
  });