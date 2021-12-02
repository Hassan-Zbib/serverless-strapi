const CopyPlugin = require('copy-webpack-plugin');
const slsw = require('serverless-webpack');
module.exports = {
  target: 'node',
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  node: false,
  optimization: {
    minimize: false,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: "build", to: "build"}
      ]
    }),
  ],
  // loaders: [ ... ] dfhbfdhfdshefadtzgyhregyredfgtnaetfditgbaefdsopjhtgrfeosiubntgo
  devtool: 'inline-cheap-module-source-map',
}
;
