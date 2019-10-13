module.exports = {
  'env': {
    'node': true,
    'es6': true,
  },
  'extends': [
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'plugins':
    ['import'],
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    'import/no-unresolved': [2, {commonjs: true, amd: true}],
    'new-cap': 0,
    'require-jsdoc': 0,
    'import/named': 2,
    'no-undef': 2,
    'indent': [2, 4, {
      'SwitchCase': 1
    }],
  },
  'settings': {
    'import/resolver': {
      alias: {
        map: [
          ['mapper-gql', './src/api/graphql'],
          ['mapper-api', './src/api'],
          ['~', './src']
        ],
        extensions: ['.ts', '.js', '.json'],
      }
    },
    'flowtype': {
      'onlyFilesWithFlowAnnotation': true
    }
  }
};
