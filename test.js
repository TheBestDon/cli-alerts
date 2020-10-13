const test = require('ava');
const execa = require('execa');

test('main', async t => {
	const { stdout } = await execa('./index.js', ['alert']);
	t.is(stdout.trim(), `✖  ERROR  You have failed.`);
});
