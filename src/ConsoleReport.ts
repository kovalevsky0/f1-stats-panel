import { Output } from "./AnalyzedReportMaker";

export class ConsoleReport implements Output {
  print(report: string): void {
    console.log(report);
  }
}
