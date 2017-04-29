var localDevConfig = require('./webpack-base.config');
var configurationCreator = require('webpack-configuration');
localDevConfig.entry = {
    'vox.app': './WebContent/app/app',
    //'vox.plugin': './app/commons/libs/plugin.js',
    //'vox.custom': './app/commons/libs/custom.js'
};
localDevConfig.devtool = 'source-map';
module.exports = localDevConfig;
