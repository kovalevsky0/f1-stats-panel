import { DataAnalyzer } from "./AnalyzedReportMaker";
import { StatsData } from "./StatsData";

export class PointsAnalysis implements DataAnalyzer {
  constructor(public point: number) {}

  run(data: StatsData[]): string {
    let count = 0;

    for (let row of data) {
      if (row[4] >= this.point) {
        count++;
      }
    }

    return `Count of teams that has more than ${this.point} points: ${count}`;
  }
}
