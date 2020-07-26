import { StatsReader } from "../StatsReader";

describe("StatsReader", () => {
  const statsReader = new StatsReader("./data/results.csv");
  statsReader.read();

  it("method `transformStringToRowData` returns structured data", () => {
    const strRow = [
      "1/6/2020",
      "Davisstad",
      "Rico Kihn",
      "Ab sequi dolorum.",
      "72",
    ];
    const rowData = statsReader.transformStringToRowData(strRow);
    // date
    expect(rowData[0].toDateString()).toBe("Mon Jun 01 2020");
    // racetrack
    expect(rowData[1]).toBe("Davisstad");
    // driver
    expect(rowData[2]).toBe("Rico Kihn");
    // team
    expect(rowData[3]).toBe("Ab sequi dolorum.");
    // points
    expect(rowData[4]).toEqual(expect.any(Number));
    expect(rowData[4]).toBe(72);
  });

  it("method `read` reads data from file correctly", () => {
    expect(statsReader.data).toHaveLength(9);
    expect(statsReader.data[0]).toHaveLength(5);
    // date
    expect(statsReader.data[0][0].toDateString()).toBe("Mon Jun 01 2020");
    // racetrack
    expect(statsReader.data[0][1]).toBe("Davisstad");
    // driver
    expect(statsReader.data[0][2]).toBe("Rico Kihn");
    // team
    expect(statsReader.data[0][3]).toBe("Ab sequi dolorum.");
    // points
    expect(statsReader.data[0][4]).toEqual(expect.any(Number));
    expect(statsReader.data[0][4]).toBe(72);
  });
});
