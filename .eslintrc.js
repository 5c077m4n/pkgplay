module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		indent: ['warn', 'tab'],
		'linebreak-style': ['warn', 'unix'],
		quotes: ['warn', 'single'],
		semi: ['error', 'always'],
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/no-unused-vars': ['off'],
	},
};
