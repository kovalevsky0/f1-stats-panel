import { CsvReader } from "../CsvReader";

describe("CsvReader", () => {
  const csvReader = new CsvReader("./data/results.csv");
  csvReader.read();

  it("method `read` reads data from file correctly", () => {
    expect(csvReader.data).toHaveLength(9);
    expect(csvReader.data[0]).toHaveLength(5);
    // date
    expect(csvReader.data[0][0]).toBe("1/6/2020");
    // racetrack
    expect(csvReader.data[0][1]).toBe("Davisstad");
    // driver
    expect(csvReader.data[0][2]).toBe("Rico Kihn");
    // team
    expect(csvReader.data[0][3]).toBe("Ab sequi dolorum.");
    // points
    expect(csvReader.data[0][4]).toBe("72");
  });
});
