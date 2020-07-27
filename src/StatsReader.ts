// reader of f1 races stats data

import { transformStrToDate } from "./utils";
import { StatsData } from "./StatsData";

interface DataReader {
  read(): void;
  data: string[][];
}

export class StatsReader {
  statsData: StatsData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.statsData = this.reader.data.map(this.transformStringToRowData);
  }

  transformStringToRowData(row: string[]): StatsData {
    return [
      transformStrToDate(row[0]),
      row[1],
      row[2],
      row[3],
      parseInt(row[4]),
    ];
  }
}
