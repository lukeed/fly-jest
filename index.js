const runCLI = require('jest-cli').runCLI;

module.exports = function (fly) {
	const rootDir = fly.root;
	fly.plugin('jest', {every: false}, function * (_, opts) {
		const config = Object.assign({rootDir}, opts);
		runCLI({config}, rootDir);
	});
};
