import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {ignores: ["src/js/types/schema.ts"]},
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {

    rules: {
      '@typescript-eslint/no-require-imports': 0
    },
  }
)
