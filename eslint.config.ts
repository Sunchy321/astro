import { defineConfig } from 'eslint/config';

import tsEslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
    {
        extends: [tsEslint.configs.recommended],

        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.mjs'],

        rules: {
            '@typescript-eslint/no-explicit-any':   'off',
            '@typescript-eslint/no-empty-function': 'off',

            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    varsIgnorePattern:         '^_',
                    caughtErrorsIgnorePattern: '^_',
                    argsIgnorePattern:         '^_',
                },
            ],

        },
    },
    {
        extends: [tsEslint.configs.stylistic],

        rules: {
            '@typescript-eslint/consistent-type-definitions': 'off',
        },
    },
    {
        extends: [eslintPluginAstro.configs.recommended],
    },
    {
        extends: [stylistic.configs.recommended],

        rules: {
            '@stylistic/arrow-parens': ['warn', 'as-needed'],
            '@stylistic/semi':         ['warn', 'always'],

            '@stylistic/brace-style': ['warn', '1tbs', {
                allowSingleLine: true,
            }],

            '@stylistic/indent': ['warn', 4, {
                SwitchCase: 0,
            }],

            '@stylistic/key-spacing': ['warn', {
                beforeColon: false,
                afterColon:  true,
                align:       'value',
            }],

            '@stylistic/max-statements-per-line': ['error', {
                max: 2,
            }],

            '@stylistic/member-delimiter-style': ['warn', {
                multiline: {
                    delimiter:   'semi',
                    requireLast: true,
                },

                singleline: {
                    delimiter:   'comma',
                    requireLast: false,
                },

                multilineDetection: 'brackets',
            }],

            '@stylistic/no-multi-spaces': ['warn', {
                exceptions: {
                    Property:         true,
                    ImportAttribute:  true,
                    TSTypeAnnotation: true,
                },
            }],

            '@stylistic/quotes': ['warn', 'single', {
                allowTemplateLiterals: 'never',
            }],
        },
    },
]);
