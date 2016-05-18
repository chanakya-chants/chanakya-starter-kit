/**
 * Created by suman on 08/05/16.
 */

var core = require('chanakya');

core.response('fail', 'greetings', function (to, validatorResult) {
  return {
    text: `I am sorry ${to.first_name}, I am unable to understand what you mean. ${validatorResult}`
  };
});

core.response('success', 'greetings', function (to, validatorResult) {
  return {
    text: `Hello ${to.first_name}, How are you? ${validatorResult}`
  };
});
