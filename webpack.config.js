const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		bundle: ['./src/main.js'],
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte'),
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main'],
	},
	output: {
		path: __dirname + '/public/myapp',
		filename: '[name].js',
		chunkFilename: '[name].[id].js',
		publicPath: '/myapp/',
	},
	module: {
		rules: [
			{
				test: /\.(js|mjs|svelte)$/,
				include: [
					path.resolve(__dirname, "src"),
					path.resolve(__dirname, "node_modules/svelte"),
					path.resolve(__dirname, "node_modules/@sveltech/routify")
				],				
				use: {
					loader: "babel-loader",
				}
			},
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						dev: !prod,
						emitCss: true,
						hotReload: !prod,
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
				],
			},
		],
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
	devtool: prod ? false : 'source-map',
	devServer: {
		contentBase: ['./public', './public/myapp'],
		port: 4200,
		historyApiFallback: true,
	},
	stats: {
		errors: true,
		errorDetails: true,
	},
};
