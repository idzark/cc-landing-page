const paths = {
  src: {
    index: './src/index.html',
    sass: './src/styles/main.scss',
    styles: './src/styles/**/*.scss',
    scripts:  './src/scripts/**/*.js',
    images: './src/images/**'
  },
  tmp: {
    index: './src/.tmp/index.html',
    css: './src/.tmp/styles/main.css',
    styles: './src/.tmp/styles/',
    scripts: './src/.tmp/scripts/'
  },
  dist: {
    main: './docs',
    styles: './docs/styles/',
    scripts: './docs/scripts/',
    images: './docs/images/'
  }
}

module.exports.paths = paths;