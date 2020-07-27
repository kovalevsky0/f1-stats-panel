# F1 Stats Panel

## Modules:

- CSV Data Report


### CSV Data Report

Fields:

- Date
- Race Driver
- Car
- Location (Racetrack)
- Points

### Classes Structure

- interface DataAnalyzer
- - run(data: StatsData): string

- interface Output
- - print(report: string): void

- class AnalyzedReportBuilder
- - analyzer: DataAnalyzer
- - output: Output
- - makeReport()

- PointsAnalysis
- - run(data: StatsData): string

- class HtmlReport
- - print(report: string): void

- class ConsoleReport:
- - print(report: string): void


