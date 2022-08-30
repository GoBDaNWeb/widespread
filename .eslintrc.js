module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'next/core-web-vitals',
        'airbnb',
        'airbnb-typescript',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    ignorePatterns: ['.eslintrc.js', 'next.config.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        quotes: [
            'warn',
            'single',
            {
                avoidEscape: true,
            },
        ],
        '@typescript-eslint/quotes': [
            'error',
            'single',
            {
                avoidEscape: true,
            },
        ],
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: ['state'],
            },
        ],
        'react/react-in-jsx-scope': ['off'],
        '@typescript-eslint/comma-dangle': ['off'],
        'react/prop-types': ['off'],
        'react/button-has-type': ['off'],
        '@typescript-eslint/indent': ['off'],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'no-underscore-dangle': ['off'],
        'react/jsx-no-useless-fragment': ['off'],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-alert': ['off'],
        'jsx-a11y/click-events-have-key-events': ['off'],
        'jsx-a11y/no-static-element-interactions': ['off'],
        'jsx-a11y/no-noninteractive-element-interactions': ['off'],
        '@typescript-eslint/no-unused-expressions': ['off'],
        'consistent-return': ['off'],
        'prettier/prettier': ['off'],
        'react/jsx-indent': ['off'],
        'import/order': ['off'],
        'react/jsx-indent-props': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'import/prefer-default-export': ['off'],
        'no-console': ['warn'],
        '@typescript-eslint/no-unused-vars': ['off'],
    },
};
