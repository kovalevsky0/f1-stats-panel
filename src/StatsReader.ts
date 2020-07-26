// reader of f1 races stats data

import { transformStrToDate } from "./utils";
import { CsvReader } from "./CsvReader";

type RowData = [Date, string, string, string, number];

export class StatsReader extends CsvReader<RowData> {
  transformStringToRowData(row: string[]): RowData {
    return [
      transformStrToDate(row[0]),
      row[1],
      row[2],
      row[3],
      parseInt(row[4]),
    ];
  }
}
