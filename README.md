## Installation

Install via [npm](https://npmjs.org/package/gulp-css-url-quotes):

```
npm install gulp-css-url-quotes --save-dev
```

## Example

```js
var gulp = require('gulp');
var cssUrlQuotes  = require('gulp-css-url-quotes');

gulp.task('default', function() {
    return gulp.src('./test.css')
        .pipe(cssUrlQuotes());
});
```

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.

## License

MIT © [Matthew Lee](http://mathxlee.github.io)