import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    root: "./lib",
    include: ["./__tests__/**/*.test.ts"],
  },
});
