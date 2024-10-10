import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';

export function lerMassaDadosCsv(fileName: string): any {
  const fp = fileName+'.csv';
  const testData = parse(fs.readFileSync(path.join('./test/data/', fp)), {
  columns: false,
  skip_empty_lines: true,
  });

  return testData;
}

