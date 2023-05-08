module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [
      2,
      "always",
      ["components", "api", "release", "hotfix", "changelog", "manifest"],
    ],
  },
};
