module.exports = {
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    node: true,
    jest: true
  },
  extends: 'eslint:recommended',
  rules: {
    'camelcase': ['error', { properties: 'never' }],
    'curly': ['error', 'multi-line'],
    'eqeqeq': 'error',
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-spacing': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-spacing': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'generator-star-spacing': ['error', 'after'],
    'keyword-spacing': ['error', {
      overrides: {
        if: { after: false },
        for: { after: false },
        while: { after: false },
        catch: { after: false }
      }
    }],
    'no-multiple-empty-lines': ['error', { max: 2, 'maxEOF': 1 }],
    'no-unused-vars': ['error', { args: 'none' }],
    'object-curly-spacing': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-in-parens': ['error', 'never']
  }
};
