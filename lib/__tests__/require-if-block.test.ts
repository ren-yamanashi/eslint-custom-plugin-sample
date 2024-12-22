import { RuleTester } from "eslint";
import { requireIfBlock } from "../require-if-block.mjs";

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: "latest", sourceType: "module" },
});

ruleTester.run("require-if-block", requireIfBlock, {
  valid: [
    {
      code: `
      if (true) {
        console.log("true");
      }`,
    },
  ],
  invalid: [
    {
      code: `if (true) console.log("true");`,
      errors: [{ messageId: "requireIfBlock" }],
    },
  ],
});
