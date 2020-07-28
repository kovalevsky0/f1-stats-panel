# F1 Stats Panel

> this repo contains the prototype of csv parser/reporter module for one project

🔥 TypeScript + Jest

## Modules:

- CSV Data Report

### Input Data

Fields:

- Date
- Location (Racetrack)
- Race Driver
- Team
- Car
- Points

### Class Structure

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


