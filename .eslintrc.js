module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  parserOptions: {
    parser: '@babel/eslint-parser',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    eqeqeq: 'warn',
    'no-shadow': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'array-callback-return': 'warn',
    'consistent-return': 'warn',
  },
};
