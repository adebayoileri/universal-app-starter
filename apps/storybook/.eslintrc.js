/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ["@repo/eslint-config/expo.js"],
    overrides: [
        {
            files: ['mock.ts', 'mock.tsx', '*.stories.tsx', '*.test.tsx', '__mocks__/**/*'],
            rules: {
                'import/no-default-export': 'off',
                'no-console': 'off',
                'node/no-extraneous-import': 'off',
                'node/no-unpublished-import': 'off',
                'react-hooks/rules-of-hooks': 'warn',
                'testing-library/no-await-sync-events': 'off',
                'testing-library/no-unnecessary-act': 'off',
                'testing-library/prefer-screen-queries': 'off',
                'unused-imports/no-unused-vars': 'off',
            },
        },
        {
            files: ['**/*.test.ts*', 'src/test/**/*', 'jest.setup.ts'],
            rules: {
                'node/no-missing-require': 'off',
                'node/no-unpublished-import': 'off',
            },
        },
    ],
    root: true,
};
