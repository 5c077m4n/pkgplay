module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: ['eslint:recommended', 'prettier', 'prettier/@typescript-eslint'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		project: './tsconfig.json',
		sourceType: 'module',
	},
	rules: {
		'no-unused-vars': 'off',
		indent: ['warn', 'tab'],
		'no-tabs': 'off',
		'arrow-parens': ['warn', 'as-needed'],
		'no-console': 'off',
		'import/no-extraneous-dependencies': 'off',
		'implicit-arrow-linebreak': 'off',
		'comma-dangle': 'off',
		'function-paren-newline': 'off',
		'wrap-iife': 'off',
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint/eslint-plugin'],
	ignorePatterns: ['node_modules/', 'coverage/', 'dist/'],
};
