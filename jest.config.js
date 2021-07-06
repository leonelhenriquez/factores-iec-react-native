module.exports = {
	preset: 'react-native',
	collectCoverage: true,
	moduleDirectories: ['node_modules', 'src'],
	transform: {
		'^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
	},
	coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
	testEnvironment: 'jsdom',
};
