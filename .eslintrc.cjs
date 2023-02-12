module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'plugin:svelte/prettier',
		'prettier'
	],
	plugins: ['@typescript-eslint', 'import'],
	ignorePatterns: ['*.cjs'],
	settings: {
		'import/resolver': [
			{
				typescript: {
					project: ['.svelte-kit/tsconfig.json', './tsconfig.targets.json']
				}
			}
		]
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser', // 'typescript-eslint-parser-for-extra-files',
			parserOptions: {
				project: './tsconfig.json'
			}
		},
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser', // require('typescript-eslint-parser-for-extra-files'),
				project: './tsconfig.json'
			}
		}
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		// project: './tsconfig.targets.json',
		// tsconfigRootDir: __dirname,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		// Typescript
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{ assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' }
		],
		'@typescript-eslint/naming-convention': [
			'warn',
			{ selector: 'typeLike', format: ['PascalCase'], prefix: ['T', '_'] }
		],
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'mouse-events-have-key-events': 'off',
		// import
		'import/no-unresolved': [
			'error',
			{ ignore: ['app/stores', 'app/forms', 'app/navigation', 'app/environment'] }
		],
		'import/order': [
			'error',
			{
				alphabetize: { order: 'asc' },
				pathGroups: [
					{
						pattern: '$app/**',
						group: 'external'
					}
					// { pattern: 'app/**', group: 'external' } // app/[stores,forms,navigation,environment]
				],
				groups: [
					'type',
					'external',
					['object', 'builtin', 'internal', 'parent', 'index', 'sibling', 'unknown']
				],
				'newlines-between': 'always'
			}
		],
		// unused-imports
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_'
			}
		]
	}
};
