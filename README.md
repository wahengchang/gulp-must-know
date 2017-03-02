#gulp-must-know

from: https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js

## Install

```
$ git clone https://github.com/wahengchang/gulp-must-know
$ npm install
```

## Run
#### Run default gulp
```
$./node_modules/gulp/bin/gulp.js

[19:31:55] Using gulpfile ~/Desktop/node/gulp-must-know/gulpfile.js
[19:31:55] Starting 'default'...
[19:31:55] Gulp is running ..... by Peter
[19:31:55] Finished 'default' after 165 μs

```


#### Run task copyHtml
```
$./node_modules/gulp/bin/gulp.js copyHtml

[19:32:54] Using gulpfile ~/Desktop/node/gulp-must-know/gulpfile.js
[19:32:54] Starting 'copyHtml'...
going to copy ...
[19:32:54] Finished 'copyHtml' after 6.41 ms

```


#### Run task copyHtml
```
$./node_modules/gulp/bin/gulp.js watch

[19:33:09] Using gulpfile ~/Desktop/node/gulp-must-know/gulpfile.js
[19:33:09] Starting 'watch'...
[19:33:09] Finished 'watch' after 7.43 ms

// edit some file in ./source/*

[19:34:03] Starting 'copyHtml'...
going to copy ...
[19:34:03] Finished 'copyHtml' after 6.3 ms

```


