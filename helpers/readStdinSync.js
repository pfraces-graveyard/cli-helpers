'use strict';

/**
 * readStdinSync()
 *
 * references:
 *
 *   * <http://stackoverflow.com/questions/3430939/node-js-readsync-from-stdin/16048083#16048083>
 *   * <https://github.com/shelljs/shelljs/issues/18#issuecomment-220848692>
 */

var readStdinSync = function () {
  var fs = require('fs');

  var BUFSIZE = 256;
  var buf = new Buffer(BUFSIZE);
  var bytesRead = 0;
  var data = '';

  for (;;) {
    bytesRead = fs.readSync(process.stdin.fd, buf, 0, BUFSIZE);
    if (bytesRead === 0) { break; }
    data += buf.toString(null, 0, bytesRead);
  }

  return data;
};

module.exports = readStdinSync;
