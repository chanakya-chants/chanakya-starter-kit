/**
 * Created by suman on 08/05/16.
 */

var core = require('chanakya');
var _ = require('lodash');
var Q = require('q'),
  http = require('http');

core.response('fail', 'greetings', function (to) {
  return {
    text: `I am sorry ${to.first_name}, I am unable to understand what you mean.`
  };
});

core.response('success', 'greetings', function (to) {
  return {
    text: `Hello ${to.first_name}, How are you?`
  };
});
