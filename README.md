# [gulp][gulp]-css-url-quotes [![Build Status](https://travis-ci.org/mathxlee/gulp-css-url-quotes.svg?branch=master)][ci] [![npm version](https://badge.fury.io/js/gulp-css-url-quotes.svg)](https://badge.fury.io/js/gulp-css-url-quotes) [![Dependency Status](https://gemnasium.com/badges/github.com/mathxlee/gulp-css-url-quotes.svg)](https://gemnasium.com/github.com/mathxlee/gulp-css-url-quotes)

> Echo file(s) to the console.

Echo the contents of files to the console. Great for ASCII art, banners and
important documentation. Inspired by https://npmjs.org/package/gulp-css-url-quotes

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