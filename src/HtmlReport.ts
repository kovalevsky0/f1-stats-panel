import { writeFileSync } from "fs";
import { Output } from "./AnalyzedReportMaker";

export class HtmlReport implements Output {
  constructor(public filePath: string) {}

  print(report: string): void {
    const result = `
      <div>
        <strong>Analysis Report:</strong>
        <div>${report}</div>
      </div>
    `;

    writeFileSync(this.filePath, result);
  }
}
