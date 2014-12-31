'use strict';

describe('Filter: num2text', function () {

  // load the filter's module
  beforeEach(module('maApp'));

  // initialize a new instance of the filter before each test
  var num2text;
  beforeEach(inject(function ($filter) {
    num2text = $filter('num2text');
  }));

  it('should return the input prefixed with "num2text filter:"', function () {
    var text = 'angularjs';
    expect(num2text(text)).toBe('num2text filter: ' + text);
  });

});
