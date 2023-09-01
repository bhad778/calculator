module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "prettier",
    "react",
    "react-native",
    "react-hooks",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
    semi: ["error", "always"],
    "no-loop-func": ["error"],
    "block-spacing": ["error", "always"],
    strict: ["error", "global"],
    "brace-style": [
      "error",
      "1tbs",
      {
        allowSingleLine: true,
      },
    ],
    "comma-style": ["error", "last"],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "eol-last": ["error"],
    "func-call-spacing": ["error", "never"],
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "minimum",
      },
    ],
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
        overrides: {
          function: {
            after: false,
          },
        },
      },
    ],
    "max-len": [
      "error",
      {
        code: 300,
        ignoreUrls: true,
      },
    ],
    "max-nested-callbacks": [
      "error",
      {
        max: 7,
      },
    ],
    "new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],
    "new-parens": ["error"],
    "no-lonely-if": ["error"],
    "no-trailing-spaces": ["error"],
    "no-unneeded-ternary": ["error"],
    "no-whitespace-before-property": ["error"],
    "object-curly-spacing": ["error", "always"],
    "react/display-name": ["off"],
    "operator-assignment": ["error", "always"],
    "semi-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error"],
    "space-unary-ops": [
      "error",
      {
        words: true,
        nonwords: false,
        overrides: {
          typeof: false,
        },
      },
    ],
    "no-unreachable": ["error"],
    "no-global-assign": ["error"],
    "no-self-compare": ["error"],
    "no-unmodified-loop-condition": ["error"],
    "no-constant-condition": [
      "error",
      {
        checkLoops: false,
      },
    ],
    "no-console": ["off"],
    "no-useless-escape": ["error"],
    "no-shadow-restricted-names": ["error"],
    "arrow-parens": ["error", "as-needed"],
    /*"arrow-body-style": [
      "error",
      "as-needed"
    ],*/
    "arrow-spacing": ["error"],
    "no-useless-computed-key": ["error"],
    "no-useless-rename": ["error"],
    "no-var": ["error"],
    "object-shorthand": ["error", "always"],
    "prefer-arrow-callback": ["error"],
    "prefer-const": ["error"],
    "prefer-numeric-literals": ["error"],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "rest-spread-spacing": ["error", "never"],
    "template-curly-spacing": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "@typescript-eslint/no-empty-interface": 0,
  },
};
