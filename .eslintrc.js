module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    // extends: ['plugin:react/recommended', 'standard'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        semi: 0,
        'comma-dangle': 0,
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'no-unused-vars': 'off',
        'react/display-name': 'off',
        'space-before-function-paren': 'off',
        '@typescript-eslint/no-unused-vars': ['off'],
    },
    overrides: [
        {
            files: ['**/*.tsx'],
            rules: {
                'react/prop-types': 'off',
            },
        },
    ],
    globals: { branch: true }
};
