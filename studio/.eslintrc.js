module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': [1,{
      ignore:1
    }],
    "react/jsx-curly-spacing": [2, {"when": "always"}]
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.6'
    }
  }
}
