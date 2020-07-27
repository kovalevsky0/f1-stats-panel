import { StatsData } from "./StatsData";

export interface DataAnalyzer {
  run(data: StatsData[]): string;
}

export interface Output {
  print(report: string): void;
}

export class AnalyzedReportMaker {
  constructor(public dataAnalyzer: DataAnalyzer, public output: Output) {}

  makeReport(data: StatsData[]): void {
    const reportData = this.dataAnalyzer.run(data);
    this.output.print(reportData);
  }
}
