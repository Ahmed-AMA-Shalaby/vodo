import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import vitest from '@vitest/eslint-plugin';
import compatPlugin from 'eslint-plugin-compat';
import importPlugin from 'eslint-plugin-import';
import json from 'eslint-plugin-json';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import { parser as tsParser, plugin as tsPlugin } from 'typescript-eslint';

/** @type { import("eslint").Linter.Config[] } */
const EslintConfig = [
  {
    ignores: ['.idea/*', '.vscode/*', '.next/*'],
  },
  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    plugins: {
      compat: compatPlugin,
      import: importPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      '@next/next': nextPlugin,
      '@typescript-eslint': tsPlugin,
      'jsx-a11y': jsxA11y,
      prettier,
    },
    settings: {
      'import/extensions': ['.ts', '.tsx'],
      'import/resolver': { node: true, typescript: true },
      react: { version: 'detect' },
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
    rules: {
      ...compatPlugin.configs['flat/recommended'].rules,
      ...importPlugin.flatConfigs.recommended.rules,
      ...eslint.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...tsPlugin.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
      '@typescript-eslint/naming-convention': [
        'warn',
        { selector: 'typeLike', format: ['StrictPascalCase'] },
        {
          selector: ['variableLike'],
          format: ['strictCamelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['StrictPascalCase'],
          prefix: ['is', 'are', 'should', 'has', 'can', 'did', 'will'],
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          types: ['function'],
          format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^(?!I[A-Z])[a-zA-Z][a-zA-Z0-9]*(?<!Interface)$',
            match: true,
          },
        },
      ],
      '@typescript-eslint/no-use-before-define': ['error'],
      camelcase: 'off',
      'func-style': ['error', 'expression'],
      'import/extensions': 'off',
      'import/named': 'off',
      'import/namespace': ['error', { allowComputed: true }],
      'import/prefer-default-export': 'off',
      'linebreak-style': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-empty-function': 'error',
      'no-nested-ternary': 'error',
      'no-redeclare': 'off',
      'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
      'no-shadow': 'off',
      'no-undef': 'off',
      'no-use-before-define': 'off',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: ['block-like', 'return'] },
        { blankLine: 'always', prev: ['case'], next: '*' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
      'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
      'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
      'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/jsx-pascal-case': 'error',
      'react/jsx-props-no-spreading': 'off',
      'react/no-children-prop': 'error',
      'react/no-danger-with-children': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/self-closing-comp': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    },
  },
  // JSON configuration
  json.configs['recommended'],
  // Vitest configuration
  {
    files: ['**/*.test.{ts,tsx}'],
    plugins: { vitest },
    rules: vitest.configs.recommended.rules,
  },
];

export default EslintConfig;
