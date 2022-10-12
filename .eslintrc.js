module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        '@typescript-eslint/strict-boolean-expressions': 'off',
    },
};