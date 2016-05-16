/**
 * Created by suman on 09/05/16.
 */

var core = require('chanakya');

core.expectation('greetings', function () {
  return {
    validators: ['isGreetings'],
    success: ['success'],
    fail: ['fail']
  };
});
