module.exports = {
	root: true,
	env: {browser: true, es2020: true},
	extends: [
		"eslint:recommended",
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/stylistic',
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:storybook/recommended",
		"plugin:prettier/recommended",
		"prettier"
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
	settings: {react: {version: '18.2'}},
	plugins: [
		'react-refresh',
	],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{allowConstantExport: true},
		],
		'@typescript-eslint/no-explicit-any': [
			'warn',
		],
	},
}
