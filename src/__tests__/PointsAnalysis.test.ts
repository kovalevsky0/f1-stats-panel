import { PointsAnalysis } from "../PointsAnalysis";
import { StatsReader } from "../StatsReader";
import { CsvReader } from "../CsvReader";

describe("PointsAnalysis", () => {
  it("returns result", () => {
    const statsReader = new StatsReader(new CsvReader("./data/results.csv"));
    statsReader.load();
    const pointAnalysis = new PointsAnalysis(50);
    expect(pointAnalysis.run(statsReader.statsData)).toBe(
      "Count of teams that has more than 50 points: 7"
    );
  });
});
