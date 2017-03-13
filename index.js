/*
 * gulp-css-url-quotes
 *
 * Copyright (c) 2017 Matthew Lee
 * Licensed under the MIT license.
 */

'use strict';

// dependencies
var through2 = require('through2');
var gutil = require('gulp-util');

// constants
var PLUGIN_NAME = 'gulp-css-url-quotes';

// stream
var contentsStream = function(contents) {
    var stream = through();
    stream.write(contents);
    return stream;
};

// plugin
module.exports = function() {

    return through2.obj(function(file, enc, cb) {

        var contents = '',
            urlPattern = /url\(([^)]+)\)/g,
            quotesPattern = /["\']/g;

        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        contents = (file.contents || '').toString();

        contents = contents.replace(urlPattern, function(matched, submatch) {
            return 'url("' + submatch.replace(quotesPattern, '') + '")';
        });

        if (file.isStream()) {
            var streamer = contentsStream(contents);

            streamer.on('error', this.emit.bind(this, 'error'));

            file.contents = file.contents.pipe(streamer);
        }

        if (file.isBuffer()) {
            file.contents = new Buffer(contents);
        }

        this.push(file);
        cb();

    });

};