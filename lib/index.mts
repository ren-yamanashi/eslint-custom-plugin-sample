import { noMutableInterfaceProperty } from "./no-mutable-interface-property.mjs";
import { requireIfBlock } from "./require-if-block.mjs";

const plugin = {
  rules: {
    "require-if-block": requireIfBlock,
    "no-mutable-interface-property": noMutableInterfaceProperty,
  },
};

export default plugin;
