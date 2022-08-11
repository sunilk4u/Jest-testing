const ceaseCipher = require("./ceaseCipher");

test("Key with space", () => {
  expect(ceaseCipher("sunil kumar")).toBe("tvojm Lvnbs");
});
test("Key without space", () => {
  expect(ceaseCipher("sunil")).toBe("tvojm");
});

test("Key with last letter Z", () => {
  expect(ceaseCipher("abcdez")).toBe("bcdefa");
});
