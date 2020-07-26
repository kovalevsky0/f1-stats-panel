import { readFileSync } from "fs";

export class CsvReader {
  data: string[][] = [];

  constructor(public path: string) {}

  private parseCsvString(data: string): string[][] {
    return data.split("\n").map((row: string) => row.split(","));
  }

  read(): void {
    this.data = this.parseCsvString(
      readFileSync(this.path, {
        encoding: "utf-8",
      })
    );
  }
}
