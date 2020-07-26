import { readFileSync } from "fs";

export abstract class CsvReader<T> {
  data: T[] = [];

  constructor(public path: string) {}

  private parseCsvString(data: string): T[] {
    return data
      .split("\n")
      .map((row: string) => row.split(","))
      .map((val) => this.transformStringToRowData(val));
  }

  abstract transformStringToRowData(row: string[]): T;

  read(): void {
    this.data = this.parseCsvString(
      readFileSync(this.path, {
        encoding: "utf-8",
      })
    );
  }
}
