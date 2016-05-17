/**
 * Created by suman on 16/05/16.
 */


var C = require('chanakya'),
  Cfb = require('chanakya-facebook');

var bot = C.bootstrap({
  mount: 'bot',
  expectation: 'greetings',
  token: 'EAALfXGCDGs0BABTSEqfhAldWyiamK5iAYOiFMkquTxSedHoGocIsJH4jsTPnoSU8oPPWC1qUvYSX54JCl2bjZCyX2201d94uYTMCrQyL0q4sZBrElPgsn5ETJJ5fQU7BzkLWfTRUyunXKKd5K3ZCZAdpZAZB0FIrLSkLbTBY6IRwZDZD'
});

Cfb.init(bot);
