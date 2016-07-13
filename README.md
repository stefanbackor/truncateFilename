# truncateFilename [![Build Status](https://travis-ci.org/pista329/truncateFilename.png?branch=master)](https://travis-ci.org/pista329/truncateFilename) [![npm version](https://badge.fury.io/js/truncateFilename.png)](https://npmjs.org/package/truncateFilename) [![devDependency Status](https://david-dm.org/pista329/truncateFilename/dev-status.png)](https://david-dm.org/pista329/truncateFilename#info=devDependencies)

Truncates a filename string preserving filename extension.

### Install with npm

```
npm install truncateFilename
```

To then include truncateFilename in your node app:

```
var truncateFilename = require("truncateFilename");
```

### Using truncateFilename

```js
var result = truncateFilename("helloWorld.minified.js", 15, "...");
```

### Example

```js
var original = "helloWorld.minified.js";

truncateFilename(original, 15, "...");
// "hello...fied.js"
```

## License

[MIT License](http://ilee.mit-license.org)
