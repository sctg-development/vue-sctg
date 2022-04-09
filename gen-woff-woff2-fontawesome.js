let Fontmin = require('fontmin');
var fontmin = new Fontmin()
    .src('src/assets/fontawesome/webfonts/*.ttf')
    .dest('build/fonts');

fontmin.run(function (err, files) {
    if (err) {
        throw err;
    }
});