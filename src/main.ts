import { CsvReader } from "./CsvReader";

function main() {
  const csvReader = new CsvReader("./data/results.csv");
  csvReader.read();
}

main();
