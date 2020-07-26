import { readFileSync } from "fs";
import { transformStrToDate } from "./utils";

type Row = [Date, string, string, string, number];

export class CsvReader {
  data: Row[] = [];

  constructor(public path: string) {}

  private parseCsvString(data: string): Row[] {
    return data
      .split("\n")
      .map((row: string) => row.split(","))
      .map(
        (row: string[]): Row => {
          return [
            this.parseDate(row[0]),
            row[1],
            row[2],
            row[3],
            parseInt(row[4]),
          ];
        }
      );
  }

  parseDate(dateString: string): Date {
    return transformStrToDate(dateString);
  }

  read(): void {
    this.data = this.parseCsvString(
      readFileSync(this.path, {
        encoding: "utf-8",
      })
    );
  }
}
