/**
 * Created by suman on 09/05/16.
 */

var core = require('chanakya');

core.expectation('greetings', ['isGreetings'], function (res) {
  switch (res) {
    case true:
      return ['fail', 'success'];
      break;
    case false:
      return ['fail'];
      break;
  }

});
