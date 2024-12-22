import { RuleTester } from "@typescript-eslint/rule-tester";

import { noMutableInterfaceProperty } from "../no-mutable-interface-property.mjs";

const ruleTester = new RuleTester();

ruleTester.run("no-mutable-props-interface", noMutableInterfaceProperty, {
  valid: [
    {
      code: `
        interface Sample {
          readonly name: string;
        }
      `,
    },
  ],
  invalid: [
    {
      code: `
        interface Sample {
          name: string;
        }
      `,
      output: `
        interface Sample {
          readonly name: string;
        }
      `,
      errors: [{ messageId: "noMutableInterfaceProperty" }],
    },
  ],
});
