module.exports = {
    "extends": [
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
      ],
      "rules": {
          "class-methods-use-this": 0,
          "quotes": ["error","single"],
          "semi": ["error","always"],
          "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
        }
    };
