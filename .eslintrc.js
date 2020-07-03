module.exports = {
    "parser": "babel-eslint",
    "extends": ["airbnb", "prettier"],
    'settings': {
        'react': {
            'version': '16.8.6'
        }
    },
    "env": {
        browser: true,
        es6: true,
    },
    "rules": {
        'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
        'react/prop-types': 0,
        'react/prefer-stateless-function': 0,
        'react/no-array-index-key': 0,
        'no-console': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-one-expression-per-line': 0,
        "react/jsx-props-no-spreading": 0,
        "import/no-unresolved": [
            2,
            {
                "ignore": ["^@/"] // @ 是设置的路径别名
            },
        ],
    }
}