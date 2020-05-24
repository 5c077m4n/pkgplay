module.exports = {
	testPathIgnorePatterns: ['/node_modules/', '<rootDir>/lib/', '/dist/'],
	transform: { '^.+\\.tsx?$': 'ts-jest' },
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};
