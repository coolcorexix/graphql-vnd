module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    "new-cap": 0,
    "require-jsdoc": 0,
    "no-undef": 1,
    'indent': [2, 4, {
      'SwitchCase': 1
    }],
  },
};
