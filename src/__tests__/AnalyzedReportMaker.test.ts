import fs from "fs";
import { AnalyzedReportMaker } from "../AnalyzedReportMaker";
import { CsvReader } from "../CsvReader";
import { StatsReader } from "../StatsReader";
import { PointsAnalysis } from "../PointsAnalysis";
import { ConsoleReport } from "../ConsoleReport";
import { HtmlReport } from "../HtmlReport";

// don't show console.log when tests are running
const mockConsoleLog = jest
  .spyOn(global.console, "log")
  .mockImplementationOnce(() => {});

afterEach(() => {
  mockConsoleLog.mockClear();
});

describe("AnalyzedReportMaker", () => {
  it("report analyzed data in console output", () => {
    const csvReader = new CsvReader("./data/results.csv");
    const statsReader = new StatsReader(csvReader);
    statsReader.load();
    const analyzedReportMaker = new AnalyzedReportMaker(
      new PointsAnalysis(50),
      new ConsoleReport()
    );
    analyzedReportMaker.makeReport(statsReader.statsData);
    expect(mockConsoleLog).toBeCalledTimes(1);
    expect(mockConsoleLog).toBeCalledWith(
      "Count of teams that has more than 50 points: 7"
    );
  });
  it("report analyzed data in html output", () => {
    const csvReader = new CsvReader("./data/results.csv");
    const statsReader = new StatsReader(csvReader);
    statsReader.load();
    const filePath = "./report.html";
    const analyzedReportMaker = new AnalyzedReportMaker(
      new PointsAnalysis(50),
      new HtmlReport(filePath)
    );
    analyzedReportMaker.makeReport(statsReader.statsData);
    const mockWriteFileSync = jest.spyOn(fs, "writeFileSync");
    //expect(fs.writeFileSync).toBeCalledTimes(1);
    //expect(fs.writeFileSync).toBeCalledWith(filePath, expect.any(String));
  });
});
