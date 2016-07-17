var assert = require('assert');
var spellchecker = require('spellchecker');

assert(spellchecker.isMisspelled('mispelled'));
assert(!spellchecker.isMisspelled('misspelled'));

console.log('All good!');
