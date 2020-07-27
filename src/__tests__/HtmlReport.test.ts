import fs from "fs";
import { HtmlReport } from "../HtmlReport";

describe("HtmlReport", () => {
  it("creates html report file", () => {
    const filePath = "./report.html";
    const htmlReport = new HtmlReport(filePath);
    const mockWriteFileSync = jest.spyOn(fs, "writeFileSync");
    htmlReport.print("there is a report");
    expect(mockWriteFileSync).toBeCalledTimes(1);
    expect(mockWriteFileSync).toBeCalledWith(filePath, expect.any(String));
  });
});
