// The Funniest Out-of-Office — a single line, 140 characters or fewer.
// The auto-reply confesses the filing system: "urgent" means read aloud
// at the next meeting, for laughs.
import { writeFileSync, mkdirSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "I'm away until Monday. Your email has been filed under 'urgent', which means it gets read aloud at the next meeting, for laughs.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, line, "utf8");
