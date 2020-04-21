const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './index.ts',
    },
    module: {
        rules:
            [
                {
                    test: /.tsx?$/,
                    use: 'ts-loader'
                }
            ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'Dist')
    }
};