var plugins = [
  'postcss-import',
  'postcss-use',
  'postcss-assets',
  'postcss-cssnext',
  'postcss-reporter'
];

module.exports = {
  'use': plugins,
  'input': './source/stylesheets/styles.css',
  'postcss-cssnext': {
    'browsers': '> 1%, last 2 versions, Firefox ESR, Opera 12.1', // default value
    'features': {
      'customProperties': {
        preserve: false
      },
      'customMedia': {
        preserve: false
      }
    }
  },
  'postcss-import': {
    'path': [
      './source/stylesheets/imports',
      './node_modules'
    ],
    onImport: function(sources) {
      global.watchCSS(sources, this.from);
    }
  },
  'postcss-use': {
    'modules': [
      'lost'
    ]
  },
  'postcss-assets': {
    'loadPaths': [
      './source/images',
      './source/fonts'
    ],
    'relativeTo': './source/stylesheets'
  },
  'postcss-reporter': {
    'clearMessages': true
  }
}
