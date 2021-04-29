module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "mocha": true
    },
    "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
        }
    },
    "plugins": [
    ],
    "extends": [
        "eslint:recommended",
        "google"
    ],
    "rules": {
        "indent": ["error", 4],
        "require-jsdoc": ["off"],
        "max-len": ["off", 160],
        "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")]
    }
};