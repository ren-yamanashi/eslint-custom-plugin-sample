import { ESLintUtils } from "@typescript-eslint/utils";

export const noMutableInterfaceProperty = ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "problem",
    docs: {
      description: "interfaceのプロパティには必ずreadonlyをつける",
    },
    fixable: "code",
    messages: {
      noMutableInterfaceProperty:
        "interfaceのプロパティには`readonly`をつけてください",
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {};
  },
});
