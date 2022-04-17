// vue.config.js
const gitlog = require("gitlog").default;
const fs = require('fs');

// Option 1: Just use the function, returned commit type has specified fields
const commits = gitlog({
  repo: ".",
  number: 1,
  fields: ["authorDate"],
});

const commit = {
  vue_sctg: (new Date(commits[0].authorDate)),
};

process.env.VUE_APP_GIT_LAST_COMMIT = new Date(commits[0].authorDate);
fs.writeFile('./commit.json',
  JSON.stringify(commit),
  'utf8', function (err) {
    if (err) return console.log(err);
  }
);
var path = require('path');
const auth0Conf = {
  "domain": process.env.AUTH0_DOMAIN,
  "clientId": process.env.AUTH0_CLIENT_ID
};
fs.writeFile('./auth0-conf.json',
  JSON.stringify(auth0Conf),
  'utf8', function (err) {
    if (err) return console.log(err);
  }
);
const sanityApiVersion = "2021-10-21";
const sanityConf = {
  projectId: process.env.SANITY_PROJECT_ID, // find this at manage.sanity.io or in your sanity.json
  dataset: process.env.SANITY_DATASET, // this is from those question during 'sanity init'
  apiVersion: sanityApiVersion,
  useCdn: true,
};

process.env.VUE_APP_SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID;
process.env.VUE_APP_SANITY_DATASET = process.env.SANITY_DATASET;
process.env.VUE_APP_SANITY_VERSION = sanityApiVersion; //why cannot be read from env ???

fs.writeFile('./sanity-conf.json',
  JSON.stringify(sanityConf),
  'utf8', function (err) {
    if (err) return console.log(err);
  }
);

process.env.VUE_APP_ALGOLIA_SEARCH_KEY = process.env.ALGOLIA_SEARCH_KEY;
process.env.VUE_APP_ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;


const webpackPlugins = [];

if ((process.env.CF_PAGES === '1') && (process.env.__DEBUG__ !== '1')) {
  const PurgecssPlugin = require('purgecss-webpack-plugin');
  const glob = require('glob-all')
  const PATHS = {
    src: path.join(__dirname, 'src')
  }

  const purgeCssPlugin = new PurgecssPlugin({
    paths: glob.sync(
      [
        path.join(__dirname, './public/*.html'),
        path.join(__dirname, './src/**/*.vue'),
        path.join(__dirname, './src/**/*.js')
      ]),
    safelist: [/^sm:/, /^md:/, /^lg:/, /^xl:/, /^2xl:/, /^focus:/, /^hover:/, /^group-hover:/, /\[.*\]/, /^basicLightbox/, /\/[0-9]/, /^tns/],
    fontFace: true
  })
  webpackPlugins.push(purgeCssPlugin);
}

if ((process.env.CF_PAGES === '1') && (process.env.__DEBUG__ !== '1')) {
  const FontMinPlugin = require('fontmin-webpack');
  const fontMinPlugin = new FontMinPlugin({
    autodetect: true,
    glyphs: [],
    allowedFilesRegex: /^fa[srltdb]*-/, // RegExp to only target specific fonts by their names
    skippedFilesRegex: null, // RegExp to skip specific fonts by their names
    textRegex: /\.(js|css|html|vue)$/,  // RegExp for searching text reference
    webpackCompilationHook: 'compilation', // Webpack compilation hook (for example PurgeCss webpack plugin use 'compilation' )
  });
  webpackPlugins.push(fontMinPlugin);
}

if ((process.env.CF_PAGES === '1') && (process.env.__DEBUG__ !== '1')) {
  const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin');
  const myManglePlugin = new MangleCssClassPlugin({
    classNameRegExp: '(bg|[-]*p[xylrbt]*|[-]*m[xylrbt]*|[-]*left|[-]*top|[-]*right|[-]*bottom|w|[-]*z|h|fa|fas|far|fab|justify|overflow|border|max|flex|text|font|inline|rounded|from|to|via|contrast|brightness|leading|items|backdrop|shadow|duration|whitespace|self|cursor|transition|outline)-[a-z0-9_-]+|relative|static|absolute|shadow|flex|hidden|rounded|border',
    log: true,
    reserveClassName: ['fa', 'fas','fab', 'far', 'p', 'm', 'z', 'pt', 'pb', 'px', 'py', 'pl', 'pr', 'mt', 'mb', 'mx', 'my', 'ml', 'mr', 'to'],
    ignorePrefixRegExp: '.*tns.*|light[bB]ox'
  });
  webpackPlugins.push(myManglePlugin);
}

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    plugins: webpackPlugins,
    devtool: process.env.CF_PAGES === '1' ? (process.env.__DEBUG__ === '1' ? 'source-map' : false) : 'source-map',
    mode: process.env.CF_PAGES === '1' ? (process.env.__DEBUG__ === '1' ? 'development' : 'production') : 'development',
    resolve: {
      fallback: {
        "fs": false,
      }
    },
  },
  chainWebpack(config) {
    config.resolve.alias.set('vue', path.resolve('./node_modules/vue'));
  },
};
/*

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [myManglePlugin],
    devtool: false,
    mode: 'production',
  },
};
*/
