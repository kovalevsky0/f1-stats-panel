import { CsvReader } from "../CsvReader";

describe("CsvReader", () => {
  const csvReader = new CsvReader("./data/results.csv");
  csvReader.read();

  it("method `read` reads data from file correctly", () => {
    expect(csvReader.data).toHaveLength(9);
    expect(csvReader.data[0]).toHaveLength(5);

    //console.log(csvReader.data);
  });
  it("method `parseDate` returns parsed date", () => {
    expect(csvReader.parseDate("1/6/2020")).toEqual("");
  });
});
