# truncateFilename

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
