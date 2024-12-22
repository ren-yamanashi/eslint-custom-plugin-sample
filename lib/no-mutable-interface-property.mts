import { AST_NODE_TYPES, ESLintUtils } from "@typescript-eslint/utils";

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
    const sourceCode = context.sourceCode;

    return {
      TSInterfaceDeclaration(node) {
        for (const property of node.body.body) {
          if (
            property.type !== AST_NODE_TYPES.TSPropertySignature ||
            property.key.type !== AST_NODE_TYPES.Identifier
          ) {
            continue;
          }

          if (property.readonly) continue;

          context.report({
            node: property,
            messageId: "noMutableInterfaceProperty",
            data: {
              propertyName: property.key.name,
            },
            fix: (fixer) => {
              const propertyText = sourceCode.getText(property);
              return fixer.replaceText(property, `readonly ${propertyText}`);
            },
          });
        }
      },
    };
  },
});
