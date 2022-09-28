module.exports = {
  ignorePatterns: ['dist/', 'node_modules/'],
  overrides: [
    {
      files: '*.js',
      extends: ['eslint-config-airbnb/base', 'prettier'],
    },
    {
      files: ['*.ts', '*.tsx'],
      env: {
        es6: true,
        browser: true,
        node: false,
        jest: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier',
      ],

      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint', 'react', 'react-hooks'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',

        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            varsIgnorePattern: '^_',
          },
        ],

        // We have all of our CSS stylings at the bottom of our components
        '@typescript-eslint/no-use-before-define': 'off',

        '@typescript-eslint/no-object-literal-type-assertion': 'off',

        '@typescript-eslint/array-type': [2, { default: 'array' }],

        // This is nice for using the TypeScript exhaustive pattern with switch
        'no-case-declarations': 'off',

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        camelcase: [2, { properties: 'always' }],
      },
    },
    {
      files: [
        '.eslintrc.js',
        '.prettierrc.js',
        '.stylelintrc.js',
        '.lintstagedrc.js',
      ],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],
};
