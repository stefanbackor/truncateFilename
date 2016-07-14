# truncateFilename [![Build Status](https://travis-ci.org/pista329/truncateFilename.png?branch=master)](https://travis-ci.org/pista329/truncateFilename) [![npm version](https://badge.fury.io/js/truncateFilename.png)](https://npmjs.org/package/truncateFilename) [![devDependency Status](https://david-dm.org/pista329/truncateFilename/dev-status.png)](https://david-dm.org/pista329/truncateFilename#info=devDependencies)

Truncates a filename string preserving filename extension.

### Install with npm

```
npm install truncateFilename
```

### Example usage

```js
import {truncateFilename} from "truncateFilename";
var result = truncateFilename("helloWorld-example.minified.js", 15, "...");
// "hello...fied.js"
```

## License

[MIT License](http://ilee.mit-license.org)
