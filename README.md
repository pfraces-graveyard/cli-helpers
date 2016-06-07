cli-helpers
===========

Helpers for building CLIs

Usage
-----

```js
var cli = require('cli');
cli.echo(cli.cat('README.md').toUpperCase());
```

Or load only needed helpers

```js
var echo = require('cli/echo');
var cat = require('cli/cat');

// write to stdout
echo('Hello world!');

// read file
var doc = cat('README.md');

// read stdin
var input = cat();
```

Install
-------

    npm install cli-helpers

API
---

### echo(msg)

Writes messages to `stdout`

```js
echo('Hello world!');
```

### cat (file)

Reads a file and returns its contents as string

Reads `stdin` when called without arguments
