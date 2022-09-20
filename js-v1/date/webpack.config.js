const path = require('path');
// webpack.config.js
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'umd' // 添加输出库配置
    },
    plugins: [
        // 剥离除 “en” 以外的所有语言环境。
        new MomentLocalesPlugin(),

        // 或者：剥离除 “en”、“es-us” 和 “ru” 以外的所有语言环境。
        //（“en” 内置于 Moment 中，无法移除）
        new MomentLocalesPlugin({
            localesToKeep: ['zh-cn'],
        }),
    ],
};
