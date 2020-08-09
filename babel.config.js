module.exports = {
	presets: [
	  ['@babel/preset-env', {
		  targets: {
			browsers: ["ie >= 11"]
		  },
		  modules: false,
		  spec: true,
		  forceAllTransforms: true,
		  useBuiltIns: "usage",
		  corejs: 3
	  }]
	]
};
