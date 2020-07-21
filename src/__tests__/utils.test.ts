import { transformStrToDate } from "../utils";

describe("utils", () => {
  describe("helper `transformStrToDate`", () => {
    it("returns Date object", () => {
      const date = transformStrToDate("1/6/2020");
      expect(date.toDateString()).toBe("Mon Jun 01 2020");
    });
  });
});
