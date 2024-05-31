import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {
    "rules": {
      "indent": [
        "error",
        2,
        { "SwitchCase": 1 }
      ],
      "quotes": [
        "warn",
        "double",
        { "avoidEscape": true, "allowTemplateLiterals": true }
      ],
      "arrow-parens": [
        "error",
        "always"
      ]
    }
  }
];