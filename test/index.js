const test = require('tape');
const Fly = require('fly');

test('fly-jest', t => {
	t.plan(2);
	const fly = new Fly({
		plugins: [require('../')],
		tasks: {
			*foo(f) {
				t.true('jest' in f, 'attach `jest` to Task instance');
				t.true('jest' in fly.plugins, 'attach `jest` plugin to instance');
			}
		}
	});
	fly.start('foo');
});
