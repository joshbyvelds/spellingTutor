const path = require('path');
const WebpackAutoInject = require('webpack-auto-inject-version');

module.exports = {
    entry: './typescript/master.ts',
    devtool: 'inline-source-map',
    watch: true,

    module: {
        rules: [
            {test: /\.ts?$/, use: 'ts-loader', exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },

    watchOptions: {
        aggregateTimeout: 500,
        ignored: /node_modules/
    },

    plugins: [
        new WebpackAutoInject({
            PACKAGE_JSON_PATH: './package.json',
            components: {
                InjectAsComment: true,
                AutoIncreaseVersion: true,
            },

            componentsOptions: {
                InjectAsComment: {
                    tag: 'Build version: {version} - {date}', // default
                    dateFormat: 'dddd, mmmm dS, yyyy, h:MM:ss TT', // default
                    multiLineCommentType: false, // default
                },

                AutoIncreaseVersion: {
                    runInWatchMode: true // it will increase version with every single build!
                }
            }
        }),
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};