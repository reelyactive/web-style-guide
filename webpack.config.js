const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'fontawesome-reelyactive.min.js',
    path: path.resolve(__dirname, 'js'),
  }
}