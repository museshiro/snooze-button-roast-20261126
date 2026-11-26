import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of an alarm clock ringing at 6 AM on a Saturday.
// Mechanism: the alarm as an over-eager auditor — full dedication to a
// job nobody hired it for, capped by a beep that insists it is helping.
// Dry wit, one voice, no staged setup — the punchline is the audit itself.
const line =
  "My alarm treats Saturday like a surprise audit\u20146 AM, no warning, full dedication to a job nobody hired it for, and a beep that says \"I'm helping.\"";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
