'use strict';

var readFileSync = require('./helpers/readFileSync');
var readStdinSync = require('./helpers/readStdinSync');

var cat = function (file) {
  if (!file) { return readStdinSync(); }
  return readFileSync(file);
};

module.exports = cat;
