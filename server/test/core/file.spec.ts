// Problem 3
//
// In `jest.config.ts`, we have remapped (referencing even a good example
// project https://github.com/NiGhTTraX/ts-monorepo/tree/master/examples/jest-tsjest).
// The problem is that importing using the remapped directive - expected "@core" preffix -
// doesn't work.
//
// Again, here, the Problem 1 occurs as well, auto-import/code-complete doesn't work.
import { exportFromCore } from "../../packages/core/folder/file";

describe("core", () => {
  it("should be working", () => {
    expect(exportFromCore).toBe(1);
  });
});
